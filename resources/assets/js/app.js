import Vue from 'vue';
import Notification from './components/Notification.vue'

let store = {
	user: {
		name: 'John Doe'
	}
}

window.store = store;

new Vue({
	el: '#one',

	data:  {
		foo: 'bar',
		shared: store
	}
});

new Vue({
	el: '#two',

	data: {
		foo: 'other',
		shared: store
	}
});