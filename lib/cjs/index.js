"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _VLogger_instances, _VLogger_name, _VLogger_debug, _VLogger_func, _VLogger_logInfo, _VLogger_getName, _VLogger_time;
Object.defineProperty(exports, "__esModule", { value: true });
const { color, log, yellow, red, green, cyan, cyanBright, orange, magenta, bold } = require('console-log-colors');
/**
 * * VLogger class for logging messages.
 * @class VLogger
 */
class VLogger {
    /**
     * Creates an instance of VLogger.
     * @param _debug - Enable or disable debugging.
     * @param _name - The name to display in log messages.
     */
    constructor(_debug, _name) {
        _VLogger_instances.add(this);
        _VLogger_name.set(this, void 0);
        _VLogger_debug.set(this, void 0);
        _VLogger_func.set(this, '');
        _VLogger_logInfo.set(this, false
        /**
         * Creates an instance of VLogger.
         * @param _debug - Enable or disable debugging.
         * @param _name - The name to display in log messages.
         */
        );
        __classPrivateFieldSet(this, _VLogger_name, '[ ' + _name + ' ] ', "f");
        __classPrivateFieldSet(this, _VLogger_debug, _debug, "f");
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
        console.log(`${__classPrivateFieldGet(this, _VLogger_instances, "m", _VLogger_getName).call(this)}${bold(green('[INFO]'))}${__classPrivateFieldGet(this, _VLogger_instances, "m", _VLogger_time).call(this)} ${_class}.${bold(magenta(_function + '()'))}: "${_message}": `, data);
    }
    /**
     * Log a debug message.
     * @param _class - The class name.
     * @param data - Data to log.
     * @param _message - The log message.
     * @param _function - The function name.
     */
    debug(_class = '', data = '', _message = '', _function = '') {
        console.log(`${__classPrivateFieldGet(this, _VLogger_instances, "m", _VLogger_getName).call(this)}${bold(green('[DEBUG]'))}${__classPrivateFieldGet(this, _VLogger_instances, "m", _VLogger_time).call(this)} ${_class}.${bold(magenta(_function + '()'))}: "${_message}"`, data);
    }
    /**
     * Log a warning message.
     * @param _class - The class name.
     * @param data - Data to log.
     * @param _message - The log message.
     * @param _function - The function name.
     */
    warn(_class = '', data = '', _message = '', _function = '') {
        console.log(`${__classPrivateFieldGet(this, _VLogger_instances, "m", _VLogger_getName).call(this)}${bold(red('[WARN]'))}${__classPrivateFieldGet(this, _VLogger_instances, "m", _VLogger_time).call(this)} ${_class}.${bold(magenta(_function + '()'))}: "${_message}"`, data);
    }
    /**
     * Log an error message.
     * @param _class - The class name.
     * @param _error - The error object.
     * @param _message - The log message.
     * @param _function - The function name.
     */
    error(_class = '', _error = '', _message = '', _function = '') {
        console.log(`${__classPrivateFieldGet(this, _VLogger_instances, "m", _VLogger_getName).call(this)}${bold(red('[INFO]'))}${__classPrivateFieldGet(this, _VLogger_instances, "m", _VLogger_time).call(this)} ${_class}.${bold(magenta(_function + '()'))}: "${_message}": `, _error);
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
                if (!__classPrivateFieldGet(this, _VLogger_debug, "f"))
                    return;
                (f === '') ? f = __classPrivateFieldGet(this, _VLogger_func, "f") : __classPrivateFieldSet(this, _VLogger_func, f, "f");
                this.info(_class, d, m, f);
            },
            debug: ({ d = {}, m = '', f = '' }) => {
                if (!__classPrivateFieldGet(this, _VLogger_debug, "f"))
                    return;
                (f === '') ? f = __classPrivateFieldGet(this, _VLogger_func, "f") : __classPrivateFieldSet(this, _VLogger_func, f, "f");
                this.debug(_class, d, m, f);
            },
            warn: ({ d, m = '', f = '' }) => {
                (f === '') ? f = __classPrivateFieldGet(this, _VLogger_func, "f") : __classPrivateFieldSet(this, _VLogger_func, f, "f");
                this.warn(_class, d, m, f);
            },
            error: ({ e, m = '', f = '' }) => {
                (f === '') ? f = __classPrivateFieldGet(this, _VLogger_func, "f") : __classPrivateFieldSet(this, _VLogger_func, f, "f");
                this.error(_class, e, m, f);
            },
            /**
             * Private method to return the current time.
             * @returns The formatted time string.
             * @private
             */
            log: (_function, logInfo = false) => {
                __classPrivateFieldSet(this, _VLogger_func, _function, "f");
                if (logInfo && __classPrivateFieldGet(this, _VLogger_debug, "f")) {
                    __classPrivateFieldSet(this, _VLogger_logInfo, true, "f");
                    console.log(`${__classPrivateFieldGet(this, _VLogger_instances, "m", _VLogger_getName).call(this)}${bold(green('[CALL]'))}${__classPrivateFieldGet(this, _VLogger_instances, "m", _VLogger_time).call(this)} ${_class}.${bold(magenta(_function + '()'))}}`);
                }
            }
        };
    }
    ;
}
_VLogger_name = new WeakMap(), _VLogger_debug = new WeakMap(), _VLogger_func = new WeakMap(), _VLogger_logInfo = new WeakMap(), _VLogger_instances = new WeakSet(), _VLogger_getName = function _VLogger_getName() {
    return bold(cyanBright(__classPrivateFieldGet(this, _VLogger_name, "f")));
}, _VLogger_time = function _VLogger_time() {
    const now = new Date();
    return bold(yellow(` [ ⏰  ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ⚡ ]`));
};
exports.default = VLogger;
