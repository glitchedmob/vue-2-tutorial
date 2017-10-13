<template>
	<div class="box is-info">
		<p>
			<slot></slot>
		</p>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.box {
		background:#E3E3E3;
		padding: 10px;
		border: 2px solid #C5C5C5;
		margin-bottom: 10px;
	}
</style>
