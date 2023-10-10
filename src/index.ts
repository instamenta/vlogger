const { color, log,yellow, red, green, cyan, cyanBright, orange, magenta , bold} = require('console-log-colors');


/**
 * * VLogger class for logging messages.
 * @class VLogger
 */
export default class VLogger {
    readonly #name: string
    readonly #debug: boolean
    #func: string = ''
    #logInfo: boolean = false

    /**
     * Creates an instance of VLogger.
     * @param _debug - Enable or disable debugging.
     * @param _name - The name to display in log messages.
     */
    constructor(_debug: boolean, _name: string) {
        this.#name = '[ ' + _name + ' ] ';
        this.#debug = _debug;
    }

    #getName(): any {
       return bold(cyanBright(this.#name))
    }

    /**
     * Get a new instance of VLogger.
     * @param options - Options for creating the logger.
     * @param options.debug - Enable or disable debugging.
     * @param options.name - The name to display in log messages.
     * @returns A new instance of VLogger.
     */
    public static getInstance({debug = true, name = 'VLogger'}: { debug: boolean, name: string } = {debug: true, name: 'VLogger'} ): VLogger {
        return new VLogger(debug, name);
    }

    /**
     * Log an informational message.
     *
     * @param _class - The class name.
     * @param data - Data to log.
     * @param _message - The log message.
     * @param _function - The function name.
     */
    info(_class: string = '', data: any = '', _message: string = '', _function: string = ''): void {
        console.log(`${this.#getName()}${bold(green('[INFO]'))}${this.#time()} ${_class}.${bold(magenta(_function + '()'))}: "${_message}": `, data);
    }

    /**
     * Log a debug message.
     * @param _class - The class name.
     * @param data - Data to log.
     * @param _message - The log message.
     * @param _function - The function name.
     */
    debug(_class: string = '', data: any = '', _message: string = '', _function: string = ''): void {
        console.log(`${this.#getName()}${bold(green('[DEBUG]'))}${this.#time()} ${_class}.${bold(magenta(_function+ '()'))}: "${_message}"`, data);
    }

    /**
     * Log a warning message.
     * @param _class - The class name.
     * @param data - Data to log.
     * @param _message - The log message.
     * @param _function - The function name.
     */
    warn(_class: string = '', data: any = '', _message: string = '', _function: string = ''): void {
        console.log(`${this.#getName()}${bold(red('[WARN]'))}${this.#time()} ${_class}.${bold(magenta(_function + '()'))}: "${_message}"`, data);
    }

    /**
     * Log an error message.
     * @param _class - The class name.
     * @param _error - The error object.
     * @param _message - The log message.
     * @param _function - The function name.
     */
    error(_class: string = '', _error: any = '', _message: string = '', _function: string = ''): void {
        console.log(`${this.#getName()}${bold(red('[INFO]'))}${this.#time()} ${_class}.${bold(magenta(_function + '()'))}: "${_message}": `, _error);
    }

    /**
     * Get a logger instance.
     * @param {string} _class - The class name.
     * @returns {IVlog} A logger instance.
     */
    getVlogger(_class: string = ''): IVlog {
        _class = bold(_class);
        return {
            info: ({d, m = '', f = ''}: IVInfo) => {
                if (!this.#debug) return
                (f === '') ? f = this.#func : this.#func = f;
                this.info(_class, d, m, f);
            },
            debug: ({d = {}, m = '', f = ''}: IVDebug) => {
                if (!this.#debug) return
                (f === '') ? f = this.#func : this.#func = f;
                this.debug(_class, d, m, f);
            },
            warn: ({d, m = '', f = ''}: IVWarn) => {
                (f === '') ? f = this.#func : this.#func = f;
                this.warn(_class, d, m, f);
            },
            error: ({e, m = '', f = ''}: IVError ) => {
                (f === '') ? f = this.#func : this.#func = f;
                this.error(_class, e, m, f);
            },
            /**
             * Private method to return the current time.
             * @returns The formatted time string.
             * @private
             */
            log: (_function: string, logInfo: boolean = false) => {
                this.#func = _function;
                if (logInfo && this.#debug) {
                    this.#logInfo = true;
                    console.log(`${this.#getName()}${bold(green('[CALL]'))}${this.#time()} ${_class}.${bold(magenta(_function+ '()'))}}`)
                }
            }
        }
    };

    #time(): string {
        const now = new Date();
        return bold(yellow(` [ ⏰  ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ⚡ ]`));
    }
}



export interface IVlog {
    info: (params: { d?: any, m?: string, f?: string }) => void,
    debug: (params: { d?: any, m?: string, f?: string }) => void,
    warn: (params: { d?: any, m?: string, f?: string }) => void,
    error: (params: { e: any, m?: string, f?: string }) => void,
    log: (_function: string, logInfo?: boolean) => void;
}

interface IVInfo {
    d?: any,
    m?: string,
    f?: string
}

interface IVDebug {
    d?: any,
    m?: string,
    f?: string
}

interface IVWarn {
    d?: any,
    m?: string,
    f?: string
}

interface IVError {
    e: any;
    m?: string;
    f?: string;
}
