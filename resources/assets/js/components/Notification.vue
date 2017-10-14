<template>
	<div class="notification">
		<h1>{{ message }}</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			message: 'Hello world'
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
