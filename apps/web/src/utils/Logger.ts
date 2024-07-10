export class Logger {
  private constructor(private name: string) {}

  public debug(...args: any[]) {
    // eslint-disable-next-line no-console
    console.debug(
      `%c[${this.name}]`,
      'color: blue;font-weight: bold;',
      ...args,
    );
  }

  static get(name: string) {
    return new Logger(name);
  }
}
