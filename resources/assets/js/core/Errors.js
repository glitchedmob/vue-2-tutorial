export default class Errors 
{

	constructor() 
	{
		this.errors = {};
	}

	/**
	 * Checks if a paticular error exists
	 * @param {string} field 
	 */
	has(field) 
	{
		return this.errors.hasOwnProperty(field);
	}

	/**
	 * Checks if there are any errors
	 */
	any() 
	{
		return Object.keys(this.errors).length > 0;
	}

	/**
	 * Retrieves the error message for a given error
	 * @param {string} field 
	 */
	get(field) 
	{
		if(this.has(field)) {
			return this.errors[field][0];
		}
	}

	/**
	 * Records an error
	 * @param {*} errors 
	 */
	record(errors) 
	{
		this.errors = errors;
	}

	/**
	 * Clears a paticular error, or all errors if there is no field argument
	 * @param {string} field 
	 */
	clear(field) 
	{
		if (field) { 
			delete this.errors[field]
		} else {
			this.errors = {};
		}
	}

}