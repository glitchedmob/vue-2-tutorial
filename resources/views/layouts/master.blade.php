<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="{{ mix('/css/app.css') }}">
	<title>Document</title>
</head>
<body>

	<div id="app">
		<nav class="navbar is-link">
			<router-link to="/" class="navbar-item" exact>Home</router-link>
			<router-link to="/about" class="navbar-item">About</router-link>
			<router-link to="/contact" class="navbar-item">Contact</router-link>
		</nav>

		<div class="container">
			<router-view></router-view>
		</div>
	</div>

	<script src="{{ mix('/js/manifest.js') }}"></script>
	<script src="{{ mix('/js/vendor.js') }}"></script>
	<script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>