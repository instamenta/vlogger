"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VLogger = void 0;
const console_log_colors_1 = require("console-log-colors");
class VLogger {
    constructor(debugMode, loggerName) {
        var _a, _b, _c;
        this.lastFunctionName = '';
        this.getVlogger = (className = '') => {
            var _a;
            const _className = console_log_colors_1.color.bold(className !== null && className !== void 0 ? className : (_a = this === null || this === void 0 ? void 0 : this.constructor) === null || _a === void 0 ? void 0 : _a.name);
            return {
                info: ({ d = {}, m = '', f = '' }) => {
                    if (this.isDebugOff)
                        return;
                    this.handleFunction(f);
                    this.info(_className, d, m);
                },
                debug: ({ d = {}, m = '', f = '' }) => {
                    if (this.isDebugOff)
                        return;
                    this.handleFunction(f);
                    this.debug(_className, d, m);
                },
                warn: ({ d = {}, m = '', f = '' }) => {
                    this.handleFunction(f);
                    this.warn(_className, d, m);
                },
                error: ({ e = {}, m = '', f = '' }) => {
                    this.handleFunction(f);
                    this.error(_className, e, m);
                },
                log: (f, debugMode = false) => {
                    this.handleFunction(f);
                    if (debugMode) {
                        this.debugMode = true;
                        this.call(_className);
                    }
                }
            };
        };
        this.debugMode = (_b = (_a = debugMode !== null && debugMode !== void 0 ? debugMode : process.env.LOG_LEVEL === 'true') !== null && _a !== void 0 ? _a : !!process.env.LOG_LEVEL) !== null && _b !== void 0 ? _b : true;
        this.loggerName = (_c = loggerName !== null && loggerName !== void 0 ? loggerName : process.env.LOGGER_NAME) !== null && _c !== void 0 ? _c : 'VLogger';
    }
    get time() {
        const time = new Date();
        return console_log_colors_1.color.bold(console_log_colors_1.color.yellow(` [ ⏰  ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ⚡ ]`));
    }
    handleFunction(functionName) {
        if (typeof functionName === 'function') {
            this.lastFunctionName = functionName.name;
        }
        else if (typeof functionName === 'string' && functionName.length > 0) {
            this.lastFunctionName = functionName;
        }
        return this.lastFunctionName;
    }
    get printName() { return console_log_colors_1.color.cyan(`[ ${this.loggerName} ]`); }
    get printFunction() { return console_log_colors_1.color.bold(console_log_colors_1.color.magenta(`${this.lastFunctionName}()`)); }
    ;
    printMessage(message) {
        return (typeof message === 'string' && message.length > 0)
            ? `"${message}":`
            : typeof message === 'string' ? '' : `"${message}":`;
    }
    get printInfo() { return console_log_colors_1.color.bold(console_log_colors_1.color.green('[INFO]')); }
    get printDebug() { return console_log_colors_1.color.bold(console_log_colors_1.color.green('[DEBUG]')); }
    get printWarn() { return console_log_colors_1.color.bold(console_log_colors_1.color.red('[WARN]')); }
    get printError() { return console_log_colors_1.color.bold(console_log_colors_1.color.red('[ERROR]')); }
    get printCall() { return console_log_colors_1.color.bold(console_log_colors_1.color.green('[CALL]')); }
    get isDebugOn() { return this.debugMode; }
    get isDebugOff() { return !this.debugMode; }
    printBase(type) { return `${this.printName}${type}${this.time}`; }
    printSource(className) {
        var _a;
        return ((_a = this.printFunction) === null || _a === void 0 ? void 0 : _a.length) > 0 ? `${className}.${this.printFunction}` : `${className}`;
    }
    printBody(className, type, message) {
        return `${this.printBase(type)} ${this.printSource(className)}: ${this.printMessage(message)}`;
    }
    info(className = '', additionalData = '', message = '') {
        console.log(this.printBody(className, this.printInfo, message), additionalData);
    }
    debug(className = '', additionalData = '', message = '') {
        console.log(this.printBody(className, this.printDebug, message), additionalData);
    }
    warn(className = '', additionalData = '', message = '') {
        console.log(this.printBody(className, this.printWarn, message), additionalData);
    }
    error(className = '', error = '', message = '') {
        console.log(this.printBody(className, this.printError, message), error);
    }
    call(className = '') {
        console.log(`${this.printBase(this.printCall)} ${this.printSource(className)}`);
    }
}
exports.VLogger = VLogger;
