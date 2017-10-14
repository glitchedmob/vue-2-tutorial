webpackJsonp([0],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Form__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Example__ = __webpack_require__(34);






new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
	el: '#app',

	components: { Example: __WEBPACK_IMPORTED_MODULE_2__components_Example__["a" /* default */] },

	data: {
		form: new __WEBPACK_IMPORTED_MODULE_1__core_Form__["a" /* default */]({
			name: '',
			description: ''
		})
	},

	methods: {
		onSubmit: function onSubmit() {
			this.form.submit('POST', '/projects').then(function (data) {
				return alert(data);
			}).catch(function (errors) {
				return console.log(errors);
			});
		}
	}
});

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Errors__ = __webpack_require__(33);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Form = function () {
	function Form(data) {
		_classCallCheck(this, Form);

		this.originalData = data;

		for (var field in data) {
			this[field] = data[field];
		}

		this.errors = new __WEBPACK_IMPORTED_MODULE_1__Errors__["a" /* default */]();
	}

	/**
  * Returns the data from the form fields
  */


	_createClass(Form, [{
		key: 'data',
		value: function data() {
			var data = {};

			for (var property in this.originalData) {
				data[property] = this[property];
			}

			return data;
		}

		/**
   * Resets all form fields
   */

	}, {
		key: 'reset',
		value: function reset() {
			for (var field in this.originalData) {
				this.field = '';
			}

			this.errors.clear();
		}

		/**
   * Submits the form to a specified end point using AJAX
   * @param {string} requestType 
   * @param {string} url 
   */

	}, {
		key: 'submit',
		value: function submit(requestType, url) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				__WEBPACK_IMPORTED_MODULE_0_axios___default.a[requestType.toLowerCase()](url, _this.data()).then(function (response) {
					_this.onSuccess(response.data).bind(_this);
					resolve(response.data);
				}).catch(function (error) {
					_this.onFail(error.response.data.errors).bind(_this);
					reject(error.response.data.errors);
				});
			});
		}

		/**
   * Runs if the form submit was successful
   * Clears all errors and resets the form
   * @param {*} data 
   */

	}, {
		key: 'onSuccess',
		value: function onSuccess(data) {
			this.reset();
		}

		/**
   * Runs if the form submit was unsuccessful
   * records all errors
   * @param {*} errors 
   */

	}, {
		key: 'onFail',
		value: function onFail(errors) {
			this.errors.record(errors);
		}
	}]);

	return Form;
}();

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
	function Errors() {
		_classCallCheck(this, Errors);

		this.errors = {};
	}

	/**
  * Checks if a paticular error exists
  * @param {string} field 
  */


	_createClass(Errors, [{
		key: "has",
		value: function has(field) {
			return this.errors.hasOwnProperty(field);
		}

		/**
   * Checks if there are any errors
   */

	}, {
		key: "any",
		value: function any() {
			return Object.keys(this.errors).length > 0;
		}

		/**
   * Retrieves the error message for a given error
   * @param {string} field 
   */

	}, {
		key: "get",
		value: function get(field) {
			if (this.has(field)) {
				return this.errors[field][0];
			}
		}

		/**
   * Records an error
   * @param {*} errors 
   */

	}, {
		key: "record",
		value: function record(errors) {
			this.errors = errors;
		}

		/**
   * Clears a paticular error, or all errors if there is no field argument
   * @param {string} field 
   */

	}, {
		key: "clear",
		value: function clear(field) {
			if (field) {
				delete this.errors[field];
			} else {
				this.errors = {};
			}
		}
	}]);

	return Errors;
}();

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	template: "<h1>Hello world</h1>"
});

/***/ })

},[11]);