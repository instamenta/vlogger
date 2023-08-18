"use strict";
/** @file Used for console Logging, Throwing errors & Validation. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validot = void 0;
/**
 * Vlogger class Used for console Logging, Throwing errors & Validation
 * - level - give if you want to use INFO and DEBUG + verbose errors returned from VThrow, Throw and Error
 *
 * @class VLogger
 *
 * @property {boolean} level - The logging level. Set to true to enable logging, false to disable.
 *
 * @property {function} INFO - Log an informational message.
 * @property {function} THROW - Log an error message and throw an Error.
 * @property {function} ERROR - Log an error message.
 * @property {function} VTHROW - Log an error message and throw an Error if data is invalid.
 * @property {function} DEBUG - Log a debug message.
 */
class VLogger {
    /**
     * @constructor VLogger
     *
     * @param {boolean} level - The logging level. Set to true to enable logging, false to disable.
     */
    constructor(level = true) {
        /** @type {boolean}*/
        this.level = true;
        this.level = level;
    }
    /**
     * Log an informational message.
     *
     * @param {*} $_DATA - Data to be logged.
     * @param {string} $__MESSAGE - Informational message to be logged.
     * @param {string|null} __DIR__ - Optional parameter to specify the location.
     *
     * @public
     * @method
     */
    INFO($_DATA, $__MESSAGE, __DIR__ = null) {
        if (this.level) {
            console.log(`${__DIR__
                ? `[ INFO : .${__DIR__}() ] : `
                : "[ INFO ] : "}~ "${$__MESSAGE}" ~ : ${typeof $_DATA} --> `, $_DATA);
        }
    }
    /**
     * Log an error message and throw an Error.
     *
     * @param {Error} $__ERROR - The error object to throw.
     * @param {string} $__MESSAGE - The error message to log.
     * @param {string|null} __DIR__ - Optional parameter to specify the location.
     *
     * @throws {Error} - Always throws the provided error.
     *
     * @public
     * @method
     */
    THROW($__ERROR, $__MESSAGE, __DIR__ = null) {
        console.error(`${__DIR__
            ? `[ ERROR : .${__DIR__}() ] : `
            : "[ ERROR ] : "}~ "${$__MESSAGE}" ~ : `, this.level ? $__ERROR.message : $__ERROR);
        throw $__ERROR;
    }
    /**
     * Log an error message.
     *
     * @param {Error} $__ERROR - The error object to log.
     * @param {string} $__MESSAGE - The error message to log.
     * @param {string|null} __DIR__ - Optional parameter to specify the location.
     *
     * @public
     * @method
     */
    ERROR($__ERROR, $__MESSAGE, __DIR__ = null) {
        console.error(`${__DIR__
            ? `[ ERROR : .${__DIR__}() ] : `
            : `[ ERROR ] : `}~ "${$__MESSAGE}" ~ : `, this.level ? $__ERROR.message : $__ERROR);
    }
    /**
     * Log an error message and throw an Error if data is invalid.
     *
     * @param {*} $_DATA - Data to be checked.
     * @param {string} $__MESSAGE - Error message if data is invalid.
     * @param {string|null} __DIR__ - Optional parameter to specify the location.
     * @param {string|null} $_NAME - Optional name to include in the error message.
     *
     * @throws {Error} - Throws an error if data is invalid.
     *
     * @public
     * @method
     */
    VTHROW($_DATA, $__MESSAGE, __DIR__ = null, $_NAME = null) {
        if (!$_DATA) {
            console.error(`${__DIR__
                ? `[ VTHROW ERROR : .${__DIR__}() ]`
                : `[ VTHROW ERROR ] : `} ${$__MESSAGE
                ? `~ '${$__MESSAGE}' ~ : `
                : ''} ${typeof $_DATA} --> : ${$_NAME
                ? `${$_NAME} : `
                : ``}`, $_DATA);
            throw new Error(`${__DIR__
                ? `[ VTHROW ERROR: .${__DIR__}() ] : `
                : `[ VTHROW ERROR ] : `}${$__MESSAGE
                ? `~ '${$__MESSAGE}' ~ : `
                : ''}${typeof $_DATA} --> : ${$_NAME
                ? `${$_NAME} : `
                : ``}, $_DATA`);
        }
        else if (this.level) {
            console.log(`${__DIR__
                ? `[ VTHROW PASS : .${__DIR__}() ] : `
                : "[ VTHROW PASS ] : "} ${$__MESSAGE
                ? `~ "${$__MESSAGE}" ~ `
                : ``}${typeof $_DATA} ->> : ${$_NAME
                ? `${$_NAME} : `
                : ''}`, $_DATA);
        }
        else {
            console.log(`${__DIR__
                ? `[ VTHROW PASS : .${__DIR__}() ] : `
                : "[ VTHROW PASS ] : "} ${$__MESSAGE
                ? `~ "${$__MESSAGE}" ~ `
                : ``}${typeof $_DATA} --> : ${$_NAME
                ? `${$_NAME} : `
                : ''}`, $_DATA);
        }
    }
    /**
     * Log a debug message.
     *
     * @param {*} $_DATA - Data to be logged.
     * @param {string|null} __DIR__ - Optional parameter to specify the location.
     * @param {string|null} $_NAME - Optional name to include in the log message.
     * @param {string|null} $__MESSAGE - Optional message to include in the log.
     *
     * @public
     * @method
     */
    DEBUG($_DATA, $__MESSAGE = null, __DIR__ = null, $_NAME = null) {
        if (this.level) {
            console.log(`${__DIR__
                ? `[ DEBUG : .${__DIR__}() ] : `
                : `[ DEBUG ] : `}${$__MESSAGE
                ? `~ : "${$__MESSAGE}" ~ : `
                : ''}${typeof $_DATA} --> ${$_NAME
                ? `${$_NAME} : `
                : ''} `, $_DATA);
        }
    }
}
exports.default = VLogger;
/**
 * A simple validation utility class for checking various types and conditions.
 *
 * @class Validot
 * @property {boolean} level - Indicates whether to log errors.
 * @property {string} prefix - Prefix for error messages.
 */
class Validot {
    /**
     * Creates an instance of Validot.
     *
     * @constructor Validot
     *
     * @param {boolean} [$level=false] - Set to true to log errors.
     * @param {string} [$prefix='[Validot] : '] - Prefix for error messages.
     * @param {string} [$VALIDOT_NAME] - Name of the Validot.
     *
     * @example
     * // Create an instance with logging enabled and a custom prefix
     * const validator = new Validot(true, '[MyValidator]');
     */
    constructor($level = false, $prefix = '', $VALIDOT_NAME = '[Validot] : ') {
        /** @property {boolean} level - Set to true to enable error logging. */
        this.level = true;
        /** @property {string} prefix - The prefix for error messages. */
        this.prefix = '';
        /** @property {string} defaultPrefix - The prefix for the class. */
        this.defaultPrefix = '';
        this.level = $level;
        this.prefix = $VALIDOT_NAME + $prefix;
        this.defaultPrefix = $VALIDOT_NAME;
    }
    /**
     * @param {string} $_className - Name of the class you are using this to log for
     *
     * @public
     * @method
     * @example
     * class SomeClass{
     *     constructor(Validator) {
     *         this.validator = new Validator(true, 'SomeClass');
     *     }
     *     function mightFail(foobar = 30) {
     *         this.validator.isString(foobar, 'foobar', mightFail); //SomeClass.mightFail(): Value foobar must be string. Received 30
     *     }
     * }
     */
    setPrefix($_className) {
        this.prefix = this.defaultPrefix + $_className;
    }
    /**
     *
     * @param {boolean} bool - State you desire of logging and verbosity of error messages
     *
     * @public
     * @method
     * @example
     * try {
     *     validator.setLevel(true)
     *     validator.is('Hello', 'number'); // <-- verbose error
     * } catch (error) {
     *     throw error
     * } finally {
     *     validator.setLevel(false) // <-- turn off verbose errors
     * }
     *
     */
    setLevel(bool) {
        this.level = bool;
    }
    /**
     * Validates if the given value is of the specified type.
     *
     * @param {any} $VAR - The value to be validated.
     * @param {string} $TYPE - The expected type.
     * @param {string|null} [$_NAME=null] - The name of the variable.
     * @param {string|null} [$_DIR_=null] - The method name (optional).
     *
     * @throws {Error} Throws an error with the provided message if validation fails.
     *
     * @public
     * @method
     * @example
     * // Validate that age is a number
     * validator.is(age, 'number', 'Age');
     */
    is($VAR, $TYPE, $_NAME = null, $_DIR_ = null) {
        if (typeof $VAR !== $TYPE.toLowerCase()) {
            if (this.level)
                console.log(this.prefix + ($_DIR_ ? `.${$_DIR_}() : ` : '')
                    + `Value '${$_NAME || 'UNKNOWN'}' must be of type '${$TYPE}'. Received: ` + $VAR);
            throw new Error(($_DIR_ ? `.${$_DIR_}() : ` : '') + `Value '${$_NAME || 'UNKNOWN'}' must be of type '${$TYPE}'. Received: ` + $VAR);
        }
    }
    /**
     * Validates if the given value is equal to the specified reference value.
     *
     * @param {any} $VAR - The value to be validated.
     * @param {any} $COMPARE - The reference value to compare with.
     * @param {string|null} [$_NAME=null] - The name of the variable.
     * @param {string|null} [$_DIR_=null] - The method name (optional).
     *
     * @throws {Error} Throws an error with the provided message if validation fails.
     *
     * @public
     * @method
     * @example
     * // Validate that enteredPassword matches confirmPassword
     * validator.equals(enteredPassword, confirmPassword, 'Password', 'matchPasswords');
     */
    equals($VAR, $COMPARE, $_NAME = null, $_DIR_ = null) {
        if ($VAR !== $COMPARE) {
            if (this.level)
                console.log(this.prefix + ($_DIR_ ? `.${$_DIR_}() : ` : '')
                    + `Value '${$_NAME || 'UNKNOWN'}' must be equal to '${$COMPARE}'. Received: ` + $VAR);
            throw new Error(($_DIR_ ? `.${$_DIR_}() : ` : '') + `Value '${$_NAME || 'UNKNOWN'}' must be equal to '${$COMPARE}'. Received: ` + $VAR);
        }
    }
    /**
     * Validates if the given value is a string.
     *
     * @param {any} $VAR - The value to be validated.
     * @param {string|null} [$_NAME=null] - The name of the variable.
     * @param {string|null} [$_DIR_=null] - The method name (optional).
     *
     * @throws {Error} Throws an error with the provided message if validation fails.
     *
     * @public
     * @method
     * @example
     * // Validate that username is a string
     * validator.isString(username, 'Username');
     */
    isString($VAR, $_NAME = null, $_DIR_ = null) {
        if (typeof $VAR !== 'string') {
            if (this.level)
                console.log(this.prefix + ($_DIR_ ? `.${$_DIR_}() : ` : '')
                    + `Value '${$_NAME || 'UNKNOWN'}' must be a string. Received: ` + $VAR);
            throw new Error(($_DIR_ ? `.${$_DIR_}() : ` : '') + `Value '${$_NAME || 'UNKNOWN'}' must be a string. Received: ` + $VAR);
        }
    }
    /**
     * Validates if the given value is a number.
     *
     * @param {any} $VAR - The value to be validated.
     * @param {string|null} [$_NAME=null] - The name of the variable.
     * @param {string|null} [$_DIR_=null] - The method name (optional).
     *
     * @throws {Error} Throws an error with the provided message if validation fails.
     *
     * @public
     * @method
     * @example
     * // Validate that quantity is a number
     * validator.isNumber(quantity, 'Quantity');
     */
    isNumber($VAR, $_NAME = null, $_DIR_ = null) {
        if (typeof $VAR !== 'number') {
            if (this.level)
                console.log(this.prefix + ($_DIR_ ? `.${$_DIR_}() : ` : '')
                    + `Value '${$_NAME || 'UNKNOWN'}' must be a number. Received: ` + $VAR);
            throw new Error(($_DIR_ ? `.${$_DIR_}() : ` : '') + `Value '${$_NAME || 'UNKNOWN'}' must be a number. Received: ` + $VAR);
        }
    }
    /**
     * Validates if the given value is a valid ObjectId (assuming MongoDB ObjectId).
     *
     * @param {any} $VAR - The value to be validated.
     * @param {string|null} [$_NAME=null] - The name of the variable.
     * @param {string|null} [$_DIR_=null] - The method name (optional).
     *
     * @throws {Error} Throws an error with the provided message if validation fails.
     *
     * @public
     * @method
     * @example
     * // Validate that productId is a valid ObjectId
     * validator.isObjectId(productId, 'Product ID');
     */
    isObjectId($VAR, $_NAME = null, $_DIR_ = null) {
        if (!/^[0-9a-fA-F]{24}$/.test($VAR)) {
            if (this.level)
                console.log(this.prefix + ($_DIR_ ? `.${$_DIR_}() : ` : '')
                    + `Value '${$_NAME || 'UNKNOWN'}' must be a valid ObjectId. Received: ` + $VAR);
            throw new Error(($_DIR_ ? `.${$_DIR_}() : ` : '') + `Value '${$_NAME || 'UNKNOWN'}' must be a valid ObjectId. Received: ` + $VAR);
        }
    }
    /**
     * Validates if the given value is not null.
     *
     * @param {any} $VAR - The value to be validated.
     * @param {string|null} [$_NAME=null] - The name of the variable.
     * @param {string|null} [$_DIR_=null] - The method name (optional).
     *
     * @throws {Error} Throws an error with the provided message if validation fails.
     *
     * @public
     * @method
     * @example
     * // Validate that user is not null
     * validator.isNotNull(user, 'User');
     */
    isNotNull($VAR, $_NAME = null, $_DIR_ = null) {
        if ($VAR === null) {
            if (this.level)
                console.log(this.prefix + ($_DIR_ ? `.${$_DIR_}() : ` : '')
                    + `Value '${$_NAME || 'UNKNOWN'}' cannot be null. Received: ` + $VAR);
            throw new Error(($_DIR_ ? `.${$_DIR_}() : ` : '') + `Value '${$_NAME || 'UNKNOWN'}' cannot be null. Received: ` + $VAR);
        }
    }
    /**
     * Validates if the given value is an array.
     *
     * @param {any} $VAR - The value to be validated.
     * @param {string|null} [$_NAME=null] - The name of the variable.
     * @param {string|null} [$_DIR_=null] - The method name (optional).
     *
     * @throws {Error} Throws an error with the provided message if validation fails.
     *
     * @public
     * @method
     * @example
     * // Validate that products is an array
     * validator.isArray(products, 'Products');
     */
    isArray($VAR, $_NAME = null, $_DIR_ = null) {
        if (!Array.isArray($VAR)) {
            if (this.level)
                console.log(this.prefix + ($_DIR_ ? `.${$_DIR_}() : ` : '')
                    + `Value '${$_NAME || 'UNKNOWN'}' must be an array. Received: ` + $VAR);
            throw new Error(($_DIR_ ? `.${$_DIR_}() : ` : '') + `Value '${$_NAME || 'UNKNOWN'}' must be an array. Received: ` + $VAR);
        }
    }
    /**
     * Validates if the given value is an object.
     *
     * @param {any} $VAR - The value to be validated.
     * @param {string|null} [$_NAME=null] - The name of the variable.
     * @param {string|null} [$_DIR_=null] - The method name (optional).
     *
     * @throws {Error} Throws an error with the provided message if validation fails.
     *
     * @public
     * @method
     * @example
     * // Validate that person is an object
     * validator.isObject(person, 'Person');
     */
    isObject($VAR, $_NAME = null, $_DIR_ = null) {
        if (typeof $VAR !== 'object' || $VAR === null || Array.isArray($VAR)) {
            if (this.level)
                console.log(this.prefix + ($_DIR_ ? `.${$_DIR_}() : ` : '')
                    + `Value '${$_NAME || 'UNKNOWN'}' must be an object. Received: ` + $VAR);
            throw new Error(($_DIR_ ? `.${$_DIR_}() : ` : '') + `Value '${$_NAME || 'UNKNOWN'}' must be an object. Received: ` + $VAR);
        }
    }
}
exports.Validot = Validot;
