Vue.component('task-list', {
	template: '<ul><slot></slot></ul>'
});

Vue.component('task', {
	template: '<li><slot></slot></li>'
});

new Vue({
	el: '#root'
})