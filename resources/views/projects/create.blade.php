<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css" />
	<style>
		body {
			padding-top: 40px;
		}

		.control {
			margin-bottom: 10px;
		}
	</style>
</head>
<body>
	<div id="app" class="container">
		<example></example>
		@include('projects.list')

		<form action="/projects" method="POST" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">

			<div class="control">
				<label for="name" class="label">Project Name:</label>
				<input type="text" id="name" name="name" class="input" v-model="form.name">
				<span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
			</div>

			<div class="control">
				<label for="description" class="label">Project description:</label>
				<input type="text" id="description" name="description" class="input" v-model="form.description">
				<span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
			</div>

			<div class="control">
				<button class="button is-primary" :disabled="form.errors.any()">Create</button>
			</div>

		</form>
	</div>

	<script src="/js/vendor.js"></script>
	<script src="/js/app.js"></script>
</body>
</html>