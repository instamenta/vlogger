export declare class VLogger {
    private readonly loggerName;
    private debugMode;
    private lastFunctionName;
    constructor(debugMode?: boolean, loggerName?: string);
    private get time();
    private handleFunction;
    private get printName();
    private get printFunction();
    private printMessage;
    private get printInfo();
    private get printDebug();
    private get printWarn();
    private get printError();
    private get printCall();
    get isDebugOn(): boolean;
    get isDebugOff(): boolean;
    private printBase;
    private printSource;
    private printBody;
    info(className?: string, additionalData?: any, message?: string): void;
    debug(className?: string, additionalData?: any, message?: string): void;
    warn(className?: string, additionalData?: any, message?: string): void;
    error(className?: string, error?: any, message?: string): void;
    call(className?: string): void;
    getVlogger: (className: string) => IVlog;
}
type IVInfo = {
    d?: any;
    m?: string;
    f?: string;
};
type IVDebug = {
    d?: any;
    m?: string;
    f?: string;
};
type IVWarn = {
    d?: any;
    m?: string;
    f?: string;
};
type IVError = {
    e?: any;
    m?: string;
    f?: string;
};
export interface IVlog {
    info: (params: IVInfo) => void;
    debug: (params: IVDebug) => void;
    warn: (params: IVWarn) => void;
    error: (params: IVError) => void;
    log: (_function: string | Function, logInfo?: boolean) => void;
}
export {};
//# sourceMappingURL=index.d.ts.map