/** @file Used for console Logging, Throwing errors & Validation. */
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
export default class VLogger {
    /** @type {boolean}*/
    level: boolean;
    /**
     * @constructor VLogger
     *
     * @param {boolean} level - The logging level. Set to true to enable logging, false to disable.
     */
    constructor(level?: boolean);
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
    INFO($_DATA: any, $__MESSAGE: string, __DIR__?: string | null): void;
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
    THROW($__ERROR: Error | any, $__MESSAGE: string, __DIR__?: string | null): void;
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
    ERROR($__ERROR: Error | any, $__MESSAGE: string, __DIR__?: string | null): void;
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
    VTHROW($_DATA: any, $__MESSAGE: string, __DIR__?: string | null, $_NAME?: string | null): void;
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
    DEBUG($_DATA: any, $__MESSAGE?: string | null, __DIR__?: string | null, $_NAME?: string | null): void;
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