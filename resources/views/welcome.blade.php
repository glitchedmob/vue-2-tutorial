<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>

	<div id="root">
		<ul>
			<li v-for="skill in skills">@{{ skill }}</li>
		</ul>
	</div>
	
	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
	<script src="https://unpkg.com/vue@2.5.1/dist/vue.js"></script>
	<script src="/js/app.js"></script>
</body>
</html>