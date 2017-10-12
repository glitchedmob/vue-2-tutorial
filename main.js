
Vue.component('modal', {
	props: ['button'],
	template: `<div>
	<button @click="shown = true">{{ button }}</button>

	<div class="modal is-active" v-show="shown">
		<div class="modal-background"></div>
		<div class="modal-content">
			<div class="box">
				<slot></slot>
			</div>
		</div>
		<button class="modal-close is-large" @click="shown = false"></button>
	</div>
</div>
`,

data() {
	return {
		shown: false
	}
}

});

new Vue({
	el: '#root',
})

