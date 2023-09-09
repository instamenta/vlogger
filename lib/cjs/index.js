"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VLogger = void 0;
class VLogger {
    constructor($debug, $name) {
        this.$name = $name;
        this.$debug = true;
    }
    static getInstance($debug = true, $name = '') {
        return new VLogger($debug, $name);
    }
    info(className, data, msg, func) {
        console.log(`${this.$name}[INFO] ${className}.${func}(): "${msg}"`, data);
    }
    debug(className, data, msg, func) {
        console.log(`${this.$name}[DEBUG] ${className}.${func}(): "${msg}"`, data);
    }
    warn(className, data, msg, func) {
        console.log(`${this.$name}[WARN] ${className}.${func}(): "${msg}"`, data);
    }
    error(className, error, msg, func) {
        console.log(`${this.$name}[ERROR] ${className}.${func}(): "${msg}": `, error);
    }
    getVlog(className = '') {
        return {
            info: ({ data, msg = '', func = '' }) => {
                this.info(className, data, msg, func);
            },
            debug: ({ data = {}, msg = '', func = '' }) => {
                this.debug(className, data, msg, func);
            },
            warn: ({ data, msg = '', func = '' }) => {
                this.warn(className, data, msg, func);
            },
            error: ({ e, msg = '', func = '' }) => {
                this.error(className, e, msg, func);
            }
        };
    }
    ;
}
exports.VLogger = VLogger;
