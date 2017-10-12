
Vue.component('message', {
	props: ['title'],

	template: `<article class="message" v-show="isVisible">
	<div class="message-header">
		{{ title }}
		<button class="delete" @click='isVisible = false' ></button>
	</div>
	<div class="message-body">
		<slot></slot>
	</div>
</article>`,

data() {
	return {
		isVisible: true
	}
}

});

new Vue({
	el: '#root'
})

