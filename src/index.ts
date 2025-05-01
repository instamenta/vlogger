import {color} from 'console-log-colors';

export class VLogger {
  private readonly loggerName: string;
  private debugMode: boolean;
  private lastFunctionName: string = '';

  public constructor(debugMode?: boolean, loggerName?: string) {
    this.debugMode = debugMode ?? process.env.LOG_LEVEL === 'true' ?? !!process.env.LOG_LEVEL ?? true;
    this.loggerName = loggerName ?? process.env.LOGGER_NAME ?? 'VLogger';
  }

  private get time(): string {
    const time: Date = new Date();
    return color.bold(color.yellow(` [ ⏰  ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ⚡ ]`));
  }

  private handleFunction(functionName?: string | Function): string {
    if (typeof functionName === 'function') {
      this.lastFunctionName = functionName.name;
    } else if (typeof functionName === 'string' && functionName.length > 0) {
      this.lastFunctionName = functionName;
    }

    return this.lastFunctionName;
  }

  private get printName(): string { return color.cyan(`[ ${this.loggerName} ]`) }
  private get printFunction(): string { return color.bold(color.magenta(`${this.lastFunctionName}()`)) };

  private printMessage(message: string) {
    return (typeof message === 'string' && message.length > 0)
      ? `"${message}":`
      : typeof message === 'string' ? '' : `"${message}":`;
  }

  private get printInfo(): string { return color.bold(color.green('[INFO]')); }
  private get printDebug(): string { return color.bold(color.green('[DEBUG]')); }
  private get printWarn(): string { return color.bold(color.red('[WARN]')); }
  private get printError(): string { return color.bold(color.red('[ERROR]')); }
  private get printCall(): string { return color.bold(color.green('[CALL]')); }

  public get isDebugOn(): boolean { return this.debugMode; }
  public get isDebugOff(): boolean { return !this.debugMode; }

  private printBase(type: string): string { return `${this.printName}${type}${this.time}`}

  private printSource(className: string): string {
    return this.printFunction?.length > 0 ? `${className}.${this.printFunction}` : `${className}`;
  }

  private printBody(className: string, type: string, message: string): string {
    return `${this.printBase(type)} ${this.printSource(className)}: ${this.printMessage(message)}`
  }

  public info(className = '', additionalData: any = '', message: string = ''): void {
    console.log(this.printBody(className, this.printInfo, message), additionalData);
  }

  public debug(className: string = '', additionalData: any = '', message: string = ''): void {
    console.log(this.printBody(className, this.printDebug, message), additionalData);
  }

  public warn(className: string = '', additionalData: any = '', message: string = ''): void {
    console.log(this.printBody(className, this.printWarn, message), additionalData);
  }

  public error(className: string = '', error: any = '', message: string = ''): void {
    console.log(this.printBody(className, this.printError, message), error);
  }

  public call(className: string = ''): void {
    console.log(`${this.printBase(this.printCall)} ${this.printSource(className)}`)
  }

  public getVlogger: (className: string) => IVlog = (className: string = ''): IVlog => {
    const _className = color.bold(className ?? this?.constructor?.name);

    return {

      info: ({d = {}, m = '', f = ''}: IVInfo) => {
        if (this.isDebugOff) return;
        this.handleFunction(f);
        this.info(_className, d, m);
      },

      debug: ({d = {}, m = '', f = ''}: IVDebug) => {
        if (this.isDebugOff) return;
        this.handleFunction(f);
        this.debug(_className, d, m);
      },

      warn: ({d = {}, m = '', f = ''}: IVWarn) => {
        this.handleFunction(f);
        this.warn(_className, d, m);
      },

      error: ({e = {}, m = '', f = ''}: IVError ) => {
        this.handleFunction(f);
        this.error(_className, e, m);
      },

      log: (f: string | Function, debugMode: boolean = false) => {
        this.handleFunction(f);
        if (debugMode) {
          this.debugMode = true;
          this.call(_className);
        }
      }
    }
  };
}

type IVInfo = { d?: any; m?: string; f?: string }
type IVDebug = { d?: any; m?: string; f?: string }
type IVWarn = { d?: any; m?: string; f?: string }
type IVError = { e?: any; m?: string; f?: string }

export interface IVlog {
  info: (params: IVInfo) => void,
  debug: (params: IVDebug) => void,
  warn: (params: IVWarn) => void,
  error: (params: IVError) => void,
  log: (_function: string | Function, logInfo?: boolean) => void;
}

