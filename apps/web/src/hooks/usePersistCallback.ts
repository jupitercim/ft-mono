import { useCallback, useRef } from 'react';

type AnyFunction = (...props: any[]) => unknown;

export function usePersistCallback<T extends AnyFunction>(fn?: T): T {
  const fnRef = useRef<T | undefined>(fn);
  fnRef.current = fn;
  // 不能改写为 useCallback(fnRef.current, []), 不然无法实时变化
  const func = useCallback(
    (...props: Parameters<T>) =>
      (typeof fnRef.current === 'function' ? fnRef.current : () => void 0)(
        ...props,
      ),
    [],
  );
  return (typeof fn === 'function' ? func : fn) as T;
}
