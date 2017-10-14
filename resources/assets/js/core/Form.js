import axios from 'axios';

import Errors from './Errors';


export default class Form 
{
	constructor(data) 
	{
		this.originalData = data;

		for(let field in data) {
			this[field] = data[field];
		}

		this.errors = new Errors();
	}

	/**
	 * Returns the data from the form fields
	 */
	data()
	{
		let data = {};

		for (let property in this.originalData) {
			data[property] = this[property];
		}

		return data;
	}

	/**
	 * Resets all form fields
	 */
	reset() 
	{
		for (let field in this.originalData) {
			this.field = '';
		}

		this.errors.clear();
	}

	/**
	 * Submits the form to a specified end point using AJAX
	 * @param {string} requestType 
	 * @param {string} url 
	 */
	submit(requestType, url)
	{
		return new Promise((resolve, reject) => {
			axios[requestType.toLowerCase()](url, this.data())
				.then(response => {
					this.onSuccess(response.data).bind(this);
					resolve(response.data);
				})
				.catch(error => {
					this.onFail(error.response.data.errors).bind(this);
					reject(error.response.data.errors);
				});
		});
		
			
	}

	/**
	 * Runs if the form submit was successful
	 * Clears all errors and resets the form
	 * @param {*} data 
	 */
	onSuccess(data)
	{
		this.reset();
	}

	/**
	 * Runs if the form submit was unsuccessful
	 * records all errors
	 * @param {*} errors 
	 */
	onFail(errors)
	{
		this.errors.record(errors)
	}
}