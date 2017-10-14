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

	@verbatim
		<div id="one">
			<h1>{{ shared.user.name }}</h1>
			<p>{{ foo }}</p>
		</div>
		<div id="two">
			<h1>{{ shared.user.name }}</h1>
			<p>{{ foo }}</p>
		</div>
	@endverbatim
	<script src="{{ mix('/js/manifest.js') }}"></script>
	<script src="{{ mix('/js/vendor.js') }}"></script>
	<script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>