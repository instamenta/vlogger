/**
 * * VLogger class for logging messages.
 * @class VLogger
 */
export default class VLogger {
    #private;
    /**
     * Creates an instance of VLogger.
     * @param _debug - Enable or disable debugging.
     * @param _name - The name to display in log messages.
     */
    constructor(_debug: boolean, _name: string);
    /**
     * Get a new instance of VLogger.
     * @param options - Options for creating the logger.
     * @param options.debug - Enable or disable debugging.
     * @param options.name - The name to display in log messages.
     * @returns A new instance of VLogger.
     */
    static getInstance({ debug, name }?: {
        debug: boolean;
        name: string;
    }): VLogger;
    /**
     * Log an informational message.
     *
     * @param _class - The class name.
     * @param data - Data to log.
     * @param _message - The log message.
     * @param _function - The function name.
     */
    info(_class?: string, data?: any, _message?: string, _function?: string): void;
    /**
     * Log a debug message.
     * @param _class - The class name.
     * @param data - Data to log.
     * @param _message - The log message.
     * @param _function - The function name.
     */
    debug(_class?: string, data?: any, _message?: string, _function?: string): void;
    /**
     * Log a warning message.
     * @param _class - The class name.
     * @param data - Data to log.
     * @param _message - The log message.
     * @param _function - The function name.
     */
    warn(_class?: string, data?: any, _message?: string, _function?: string): void;
    /**
     * Log an error message.
     * @param _class - The class name.
     * @param _error - The error object.
     * @param _message - The log message.
     * @param _function - The function name.
     */
    error(_class?: string, _error?: any, _message?: string, _function?: string): void;
    /**
     * Get a logger instance.
     * @param {string} _class - The class name.
     * @returns {IVlog} A logger instance.
     */
    getVlogger(_class?: string): IVlog;
}
export interface IVlog {
    info: (params: {
        d?: any;
        m?: string;
        f?: string;
    }) => void;
    debug: (params: {
        d?: any;
        m?: string;
        f?: string;
    }) => void;
    warn: (params: {
        d?: any;
        m?: string;
        f?: string;
    }) => void;
    error: (params: {
        e: any;
        m?: string;
        f?: string;
    }) => void;
    log: (_function: string, logInfo?: boolean) => void;
}
//# sourceMappingURL=index.d.ts.map