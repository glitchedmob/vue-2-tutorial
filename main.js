Vue.component('task-list', {
	template: `<ul>
	<task v-for="task in tasks">{{ task.task }}</task>
</ul>`,
	
	data() {
		return {
			tasks: [
				{ task: 'Go to the store', complete: true },
				{ task: 'Go to the bank', complete: true },
				{ task: 'Go to work', complete: true },
				{ task: 'Go to the movies', complete: true },
			]
		}
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>'
});

new Vue({
	el: '#root'
})