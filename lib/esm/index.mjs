const { color, log, yellow, red, green, cyan, cyanBright, orange, magenta, bold } = require('console-log-colors');
/**
 * * VLogger class for logging messages.
 * @class VLogger
 */
export default class VLogger {
    #name;
    #debug;
    #func = '';
    #logInfo = false;
    /**
     * Creates an instance of VLogger.
     * @param _debug - Enable or disable debugging.
     * @param _name - The name to display in log messages.
     */
    constructor(_debug, _name) {
        this.#name = '[ ' + _name + ' ] ';
        this.#debug = _debug;
    }
    #getName() {
        return bold(cyanBright(this.#name));
    }
    /**
     * Get a new instance of VLogger.
     * @param options - Options for creating the logger.
     * @param options.debug - Enable or disable debugging.
     * @param options.name - The name to display in log messages.
     * @returns A new instance of VLogger.
     */
    static getInstance({ debug = true, name = 'VLogger' } = { debug: true, name: 'VLogger' }) {
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
    info(_class = '', data = '', _message = '', _function = '') {
        console.log(`${this.#getName()}${bold(green('[INFO]'))}${this.#time()} ${_class}.${bold(magenta(_function + '()'))}: "${_message}": `, data);
    }
    /**
     * Log a debug message.
     * @param _class - The class name.
     * @param data - Data to log.
     * @param _message - The log message.
     * @param _function - The function name.
     */
    debug(_class = '', data = '', _message = '', _function = '') {
        console.log(`${this.#getName()}${bold(green('[DEBUG]'))}${this.#time()} ${_class}.${bold(magenta(_function + '()'))}: "${_message}"`, data);
    }
    /**
     * Log a warning message.
     * @param _class - The class name.
     * @param data - Data to log.
     * @param _message - The log message.
     * @param _function - The function name.
     */
    warn(_class = '', data = '', _message = '', _function = '') {
        console.log(`${this.#getName()}${bold(red('[WARN]'))}${this.#time()} ${_class}.${bold(magenta(_function + '()'))}: "${_message}"`, data);
    }
    /**
     * Log an error message.
     * @param _class - The class name.
     * @param _error - The error object.
     * @param _message - The log message.
     * @param _function - The function name.
     */
    error(_class = '', _error = '', _message = '', _function = '') {
        console.log(`${this.#getName()}${bold(red('[INFO]'))}${this.#time()} ${_class}.${bold(magenta(_function + '()'))}: "${_message}": `, _error);
    }
    /**
     * Get a logger instance.
     * @param {string} _class - The class name.
     * @returns {IVlog} A logger instance.
     */
    getVlogger(_class = '') {
        _class = bold(_class);
        return {
            info: ({ d, m = '', f = '' }) => {
                if (!this.#debug)
                    return;
                (f === '') ? f = this.#func : this.#func = f;
                this.info(_class, d, m, f);
            },
            debug: ({ d = {}, m = '', f = '' }) => {
                if (!this.#debug)
                    return;
                (f === '') ? f = this.#func : this.#func = f;
                this.debug(_class, d, m, f);
            },
            warn: ({ d, m = '', f = '' }) => {
                (f === '') ? f = this.#func : this.#func = f;
                this.warn(_class, d, m, f);
            },
            error: ({ e, m = '', f = '' }) => {
                (f === '') ? f = this.#func : this.#func = f;
                this.error(_class, e, m, f);
            },
            /**
             * Private method to return the current time.
             * @returns The formatted time string.
             * @private
             */
            log: (_function, logInfo = false) => {
                this.#func = _function;
                if (logInfo && this.#debug) {
                    this.#logInfo = true;
                    console.log(`${this.#getName()}${bold(green('[CALL]'))}${this.#time()} ${_class}.${bold(magenta(_function + '()'))}}`);
                }
            }
        };
    }
    ;
    #time() {
        const now = new Date();
        return bold(yellow(` [ ⏰  ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ⚡ ]`));
    }
}
