export declare class VLogger {
    private readonly $name;
    private readonly $debug;
    constructor($debug: boolean, $name: string);
    static getInstance($debug?: boolean, $name?: string): VLogger;
    info(className: string, data: any, msg: string, func: string): void;
    debug(className: string, data: any, msg: string, func: string): void;
    warn(className: string, data: any, msg: string, func: string): void;
    error(className: string, error: any, msg: string, func: string): void;
    getVlog(className?: string): IVlog;
}
export interface IVlog {
    info: (params: {
        data: any;
        msg: string;
        func?: string;
    }) => void;
    debug: (params: {
        data?: any;
        msg?: string;
        func?: string;
    }) => void;
    warn: (params: {
        data: any;
        msg?: string;
        func?: string;
    }) => void;
    error: (params: {
        e: any;
        msg?: string;
        func?: string;
    }) => void;
}
//# sourceMappingURL=index.d.ts.map