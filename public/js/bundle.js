webpackJsonp([0],{11:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=r(2),o=r.n(t),a=r(14),i=r(34);new o.a({el:"#app",components:{Example:i.a},data:{form:new a.a({name:"",description:""})},methods:{onSubmit:function(){this.form.submit("POST","/projects").then(function(e){return alert(e)}).catch(function(e){return console.log(e)})}}})},14:function(e,n,r){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var o=r(5),a=r.n(o),i=r(33),u=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),s=function(){function e(n){t(this,e),this.originalData=n;for(var r in n)this[r]=n[r];this.errors=new i.a}return u(e,[{key:"data",value:function(){var e={};for(var n in this.originalData)e[n]=this[n];return e}},{key:"reset",value:function(){for(var e in this.originalData)this.field="";this.errors.clear()}},{key:"submit",value:function(e,n){var r=this;return new Promise(function(t,o){a.a[e.toLowerCase()](n,r.data()).then(function(e){r.onSuccess(e.data).bind(r),t(e.data)}).catch(function(e){r.onFail(e.response.data.errors).bind(r),o(e.response.data.errors)})})}},{key:"onSuccess",value:function(e){this.reset()}},{key:"onFail",value:function(e){this.errors.record(e)}}]),e}();n.a=s},33:function(e,n,r){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),a=function(){function e(){t(this,e),this.errors={}}return o(e,[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.has(e))return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}]),e}();n.a=a},34:function(e,n,r){"use strict";n.a={template:"<h1>Hello world</h1>"}}},[11]);