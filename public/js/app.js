new Vue({
	el: '#root',

	data: {
		skills: []
	},

	created() {
		axios.get('/skills')
			.then(response => this.skills = response.data);
	}
})