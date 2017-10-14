<template>
	<input type="text" :value="value" @input="updateCode($event.target.value)" ref="input">
</template>

<script>
export default {
	props: ['value'],

	data() {
		return {
			invalids: ['ALLFREE', 'SOMETHINGELSE']
		}
	},

	methods: {
		updateCode(code) {

			if(this.invalids.includes(code)) {
				alert('This coupon is no longer valid, Sorry!');
				this.$refs.input.value = code = '';
			}
			this.$emit('input', code);
		}
	}
}
</script>

<style lang="scss" scoped>
	.notification {
		background-color: grey;

		h1 {
			font-size: 4rem;
		}
	}
</style>
