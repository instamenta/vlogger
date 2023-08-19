/** @file Used for console Logging, Throwing errors & Validation. */
/**
 * Vlogger class Used for console Logging, Throwing errors & Validation
 * * level - give if you want to use INFO and DEBUG + verbose errors returned from VThrow, Throw and Error
 *
 * @class VLogger
 */
export declare class VLogger {
    /**
     * @type {boolean}
     * @private
     * @readonly
     */
    private readonly $name;
    /**
     * @type {boolean}
     * @private
     * @readonly
     */
    private readonly $debug;
    /**
     * @param {any} $debug
     * @param {string} $name
     */
    constructor($debug: boolean, $name: string);
    /**
     * @param {string} className
     * @param {any} data
     * @param {string} msg
     * @param {string} func
     */
    info: (className: string, data: any, msg: string, func: string) => void;
    /**
     * @param {string} className
     * @param {any} data
     * @param {string} msg
     * @param {string} func
     */
    debug: (className: string, data: any, msg: string, func: string) => void;
    /**
     * @param {string} className
     * @param {any} data
     * @param {string} msg
     * @param {string} func
     */
    warn: (className: string, data: any, msg: string, func: string) => void;
    /**
     * @param {string} className
     * @param {any} error
     * @param {string} msg
     * @param {string} func
     */
    error: (className: string, error: any, msg: string, func: string) => void;
    /**
     * @param {boolean} $debug
     * @param {string} $name
     *
     * @returns {VLogger}
     */
    static getInstance($debug?: boolean, $name?: string): VLogger;
    /**
     * @param {string} className
     */
    getVlog: (className?: string) => IVlog;
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
/**
 * A simple validation utility class for checking various types and conditions.
 *
 * @class Validot
 * @property {boolean} level - Indicates whether to log errors.
 * @property {string} prefix - Prefix for error messages.
 */
export declare class Validot {
    /** @property {boolean} level - Set to true to enable error logging. */
    protected level: boolean;
    /** @property {string} prefix - The prefix for error messages. */
    protected prefix: string;
    /** @property {string} defaultPrefix - The prefix for the class. */
    protected defaultPrefix: string;
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
    constructor($level?: boolean, $prefix?: string, $VALIDOT_NAME?: string);
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
    setPrefix($_className: string): void;
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
    setLevel(bool: boolean): void;
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
    is($VAR: any, $TYPE: string, $_NAME?: string | null, $_DIR_?: string | null): void;
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
    equals($VAR: any, $COMPARE: any, $_NAME?: string | null, $_DIR_?: string | null): void;
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
    isString($VAR: any, $_NAME?: string | null, $_DIR_?: string | null): void;
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
    isNumber($VAR: any, $_NAME?: string | null, $_DIR_?: string | null): void;
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
    isObjectId($VAR: any, $_NAME?: string | null, $_DIR_?: string | null): void;
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
    isNotNull($VAR: any, $_NAME?: string | null, $_DIR_?: string | null): void;
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
    isArray($VAR: any, $_NAME?: string | null, $_DIR_?: string | null): void;
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
    isObject($VAR: any, $_NAME?: string | null, $_DIR_?: string | null): void;
}
//# sourceMappingURL=index.d.ts.map