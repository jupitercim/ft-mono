enum MaybeTypeNames {
  Just,
  Nothing,
}

type Just<T> = Maybe<T> & { type: MaybeTypeNames.Just; value: T }
type Nothing = Maybe<never> & { type: MaybeTypeNames.Nothing }

export class Maybe<T> {
  type: MaybeTypeNames
  public value?: T

  constructor(type: MaybeTypeNames, value?: T) {
    this.type = type
    if (type === MaybeTypeNames.Just) {
      this.value = value
    }
  }

  static Just<T>(value: T): Maybe<T> {
    return new Maybe(MaybeTypeNames.Just, value) as Maybe<T>
  }

  static Nothing(): Nothing {
    return new Maybe(MaybeTypeNames.Nothing) as Nothing
  }

  isJust(): this is Just<T> {
    return this.type === MaybeTypeNames.Just
  }

  isNothing(): this is Nothing {
    return this.type === MaybeTypeNames.Nothing
  }

  map<U>(f: (value: T) => U, emptyVal?: U): Maybe<U> {
    return this.isJust() ? Maybe.Just(f(this.value)) : emptyVal !== undefined ? Maybe.Just(emptyVal) : Maybe.Nothing()
  }

  async mapAsync<U>(f: (value: T) => Promise<Maybe<U>>): Promise<Maybe<U>> {
    if (this.isNothing()) return Promise.resolve(Maybe.Nothing())
    const result: Maybe<U> = await f(this.value!)
    return result
  }

  mapWith<U, O extends unknown[]>(
    ...args: [...val: { [K in keyof O]: Maybe<O[K]> }, f: (self: T, ...args: O) => U]
  ): Maybe<U> {
    const val = args.slice(0, -1) as { [K in keyof O]: Maybe<O[K]> }
    const f = args[args.length - 1] as (self: T, ...args: O) => U

    if (this.isJust() && val.every(x => x.isJust())) {
      const values = val.map(x => x.value!) as O
      return Maybe.Just(f(this.value!, ...values))
    }

    return Maybe.Nothing()
  }

  unwrapWith<U>(f: (val: T) => U, def: U): U {
    if (this.isJust()) {
      const r = f(this.value)
      return r
    }
    return def
  }

  unwrap(): T {
    return this.value as T
  }

  toBoolean(): boolean {
    if (this.isNothing()) return false
    return Boolean(this.value)
  }

  unwrapOr<U>(val: U) {
    if (this.isJust()) {
      return this.unwrap() as T
    }
    return val as U
  }

  equal(val: T): boolean {
    return this.isJust() && this.value === val
  }

  filterUndefined(): Maybe<Exclude<T, undefined>> {
    if (this.isNothing() || this.value === undefined) {
      return Maybe.Nothing() as Maybe<Exclude<T, undefined>>
    }
    return Maybe.Just(this.value as Exclude<T, undefined>)
  }

  mapArray<U>(f: (value: ElementOf<T>) => U): Maybe<U>[] {
    if (this.isJust() && Array.isArray(this.value)) {
      return (this.value as ElementOf<T>[]).map(item => Maybe.Just(f(item)))
    }
    return [Maybe.Nothing()]
  }

  reduceArray<U>(f: (acc: U, value: ElementOf<T>) => U, init: U): Maybe<U> {
    if (this.isJust() && Array.isArray(this.value)) {
      return Maybe.Just((this.value as ElementOf<T>[]).reduce((acc, item) => f(acc, item), init))
    }
    return Maybe.Nothing()
  }

  toString() {
    return this.isJust() ? `Just(${this.value?.toString()})` : 'Nothing'
  }

  match(matcher: { Just: (val: T) => any; Nothing: () => any }) {
    return this.isJust() ? matcher.Just(this.value!) : matcher.Nothing()
  }
}

type ElementOf<T> = T extends (infer R)[] ? R : T extends readonly (infer R)[] ? R : never

export function isMaybe<T>(val: Maybe<T> | any): val is Maybe<T> {
  return val instanceof Maybe
}
