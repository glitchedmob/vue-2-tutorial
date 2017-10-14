import Vue from 'vue';

import Form from './core/Form';

import Example from './components/Example'


new Vue({
	el: '#app',

	components: { Example },

	data: {
		form: new Form({
			name: '',
			description: '',
		}),
	},

	methods: {
		onSubmit() {
			this.form.submit('POST', '/projects')
				.then(data => alert(data))
				.catch(errors => console.log(errors));
		}
	}
});