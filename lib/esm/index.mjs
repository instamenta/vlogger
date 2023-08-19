/** @file Used for console Logging, Throwing errors & Validation. */
/**
 * Vlogger class Used for console Logging, Throwing errors & Validation
 * * level - give if you want to use INFO and DEBUG + verbose errors returned from VThrow, Throw and Error
 *
 * @class VLogger
 */
export class VLogger {
    /**
     * @type {boolean}
     * @private
     * @readonly
     */
    $name;
    /**
     * @type {boolean}
     * @private
     * @readonly
     */
    $debug;
    /**
     * @param {any} $debug
     * @param {string} $name
     */
    constructor($debug, $name) {
        this.$name = $name;
        this.$debug = true;
    }
    /**
     * @param {string} className
     * @param {any} data
     * @param {string} msg
     * @param {string} func
     */
    info = (className, data, msg, func) => console.log(`${this.$name}[INFO] ${className}.${func}(): "${msg}"`, data);
    /**
     * @param {string} className
     * @param {any} data
     * @param {string} msg
     * @param {string} func
     */
    debug = (className, data, msg, func) => console.log(`${this.$name}[DEBUG] ${className}.${func}(): "${msg}"`, data);
    /**
     * @param {string} className
     * @param {any} data
     * @param {string} msg
     * @param {string} func
     */
    warn = (className, data, msg, func) => console.log(`${this.$name}[WARN] ${className}.${func}(): "${msg}"`, data);
    /**
     * @param {string} className
     * @param {any} error
     * @param {string} msg
     * @param {string} func
     */
    error = (className, error, msg, func) => console.log(`${this.$name}[ERROR] ${className}.${func}(): "${msg}": `, error);
    /**
     * @param {boolean} $debug
     * @param {string} $name
     *
     * @returns {VLogger}
     */
    static getInstance($debug = true, $name = '') {
        return new VLogger($debug, $name);
    }
    /**
     * @param {string} className
     */
    getVlog = (className = '') => ({
        /**
         * @param {Object} o
         * @param {any} o.data
         * @param {string} o.msg
         * @param {string} o.func
         */
        info: ({ data, msg = '', func = '' }) => this.info(className, data, msg, func),
        /**
         * @param {Object} o
         * @param {any} o.data
         * @param {string} o.msg
         * @param {string} o.func
         */
        debug: ({ data = {}, msg = '', func = '' }) => this.debug(className, data, msg, func),
        /**
         * @param {Object} o
         * @param {any} o.data
         * @param {string} o.msg
         * @param {string} o.func
         */
        warn: ({ data, msg = '', func = '' }) => this.warn(className, data, msg, func),
        /**
         * @param {Object} o
         * @param {any} o.e
         * @param {string} o.msg
         * @param {string} o.func
         */
        error: ({ e, msg = '', func = '' }) => this.error(className, e, msg, func),
    });
}
/**
 * A simple validation utility class for checking various types and conditions.
 *
 * @class Validot
 * @property {boolean} level - Indicates whether to log errors.
 * @property {string} prefix - Prefix for error messages.
 */
export class Validot {
    /** @property {boolean} level - Set to true to enable error logging. */
    level = true;
    /** @property {string} prefix - The prefix for error messages. */
    prefix = '';
    /** @property {string} defaultPrefix - The prefix for the class. */
    defaultPrefix = '';
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
