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
class VLogger {

	/** @type {boolean}*/
	level = true;

	/**
	 * @constructor VLogger
	 *
	 * @param {boolean} level - The logging level. Set to true to enable logging, false to disable.
	 */
	constructor(level = true) {
		this.level = level;
	}

	/**
	 * Log an informational message.
	 *
	 * @param {*} data - Data to be logged.
	 * @param {string} message - Informational message to be logged.
	 * @param {string|null} _dir - Optional parameter to specify the location.
	 *
	 * @public
	 * @method
	 */
	INFO(data, message, _dir = null) {
		if( this.level ) {
			console.log(`${
				_dir
					? `[INFO FROM ${_dir}]`
					: "[INFO]"
			} : ${message} : `, data);
		}
	}

	/**
	 * Log an error message and throw an Error.
	 *
	 * @param {Error} error - The error object to throw.
	 * @param {string} message - The error message to log.
	 * @param {string|null} _dir - Optional parameter to specify the location.
	 *
	 * @throws {Error} - Always throws the provided error.
	 *
	 * @public
	 * @method
	 */
	THROW(error, message, _dir = null) {

		console.error(`${
				_dir
					? `[ERROR IN ${_dir}]`
					: "[ERROR]"
			}  : ${message} : `,
			this.level
				? error.message
				: error
		);

		throw error;
	}

	/**
	 * Log an error message.
	 *
	 * @param {Error} error - The error object to log.
	 * @param {string} message - The error message to log.
	 * @param {string|null} _dir - Optional parameter to specify the location.
	 *
	 * @public
	 * @method
	 */
	ERROR(error, message, _dir = null) {

		console.error(`${
				_dir
					? `[ERROR IN ${_dir}]`
					: "[ERROR]"
			}  : ${message} : `,
			this.level
				? error.message
				: error
		);

	}

	/**
	 * Log an error message and throw an Error if data is invalid.
	 *
	 * @param {*} data - Data to be checked.
	 * @param {string} message - Error message if data is invalid.
	 * @param {string|null} _dir - Optional parameter to specify the location.
	 * @param {string|null} name - Optional name to include in the error message.
	 *
	 * @throws {Error} - Throws an error if data is invalid.
	 *
	 * @public
	 * @method
	 */
	VTHROW(data, message, _dir = null, name = null) {
		if( !data ) {

			console.error(`${
				_dir
					? `[VTHROW ERROR IN ${_dir}]`
					: "[VTHROW ERROR] : "
			} : BECAUSE OF INVALID [DATA] : ${data}`);

			throw new Error(`${
					_dir
						? `[VTHROW ERROR IN ${_dir}] : `
						: "[VTHROW ERROR] : "
				} : BECAUSE OF INVALID [DATA] : ${
					name
						? `${name} ${data}`
						: data}`
			);

		} else if( this.level ) {

			console.log(`${
					_dir
						? `[VTHROW PASS ${_dir}] : `
						: "[VTHROW PASS] : "
				} `,
				name
					? `${name} : `
					: ''
				, data
			);

		} else {
			console.log(`${
					_dir
						? `[VTHROW PASS ${_dir}] : `
						: "[VTHROW PASS] : "
				} `,
				name
					? `${name} : `
					: ''
			);
		}

	}

	/**
	 * Log a debug message.
	 *
	 * @param {*} data - Data to be logged.
	 * @param {string|null} _dir - Optional parameter to specify the location.
	 * @param {string|null} name - Optional name to include in the log message.
	 * @param {string|null} message - Optional message to include in the log.
	 *
	 * @public
	 * @method
	 */
	DEBUG(data, _dir = null, name = null, message = null) {

		if( this.level ) {
			console.log(`${
				_dir
					? `[DEBUG : ${_dir}]`
					: `[DEBUG] : `
			} ${
				name
					? `${name}() : `
					: ''
			} ${message
				? `[MESSAGE : ${message}] : `
				: ''
			}`, data);
		}

	}

}

module.exports = VLogger;
