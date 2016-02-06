<!DOCTYPE HTML>
<html>
	<head>

		<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
		<title>Lychee</title>

		<meta name="author" content="Tobias Reich">

		<!-- CSS -->
		<link type="text/css" rel="stylesheet" href="dist/main.css">

		<link rel="shortcut icon" href="favicon.ico">
		<link rel="apple-touch-icon" href="src/images/apple-touch-icon-iphone.png" sizes="120x120">
		<link rel="apple-touch-icon" href="src/images/apple-touch-icon-ipad.png" sizes="152x152">

		<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="apple-mobile-web-app-capable" content="yes">

	</head>
	<body class="view">

	<!-- Header -->
	<header class="header header--view">

		<div class="header__toolbar header__toolbar--public header__toolbar--visible">

			<a class="header__title"></a>

			<a class="button button--info" id="button_info" title="About Photo">
				<svg class="iconic"><use xlink:href="#info"></use></svg>
			</a>
			<a class="button" id="button_direct" title="Direct Link">
				<svg class="iconic"><use xlink:href="#link-intact"></use></svg>
			</a>

		</div>

	</header>

	<!-- ImageView -->
	<div id="imageview" class="view"></div>

	<!-- Infobox -->
	<div class="sidebar">
		<div class="sidebar__header">
			<h1>About</h1>
		</div>
		<div class="sidebar__wrapper"></div>
	</div>

	<!-- JS -->
	<script type="text/javascript" src="src/node_modules/jquery/dist/jquery.min.js"></script>

	<script type="text/javascript" src="dist/main.js"></script>

<!---->
<!--	<script type="text/javascript" src="src/scripts/lychee.js"></script>-->
<!--	<script type="text/javascript" src="src/scripts/_gup.js"></script>-->
<!--	<script type="text/javascript" src="src/scripts/build.js"></script>-->
<!--	<script type="text/javascript" src="src/scripts/api.js"></script>-->
<!--	<script type="text/javascript" src="src/scripts/header.js"></script>-->
<!--	<script type="text/javascript" src="src/scripts/photo.js"></script>-->
<!--	<script type="text/javascript" src="src/scripts/view.js"></script>-->
<!--	<script type="text/javascript" src="src/scripts/album.js"></script>-->
<!--	<script type="text/javascript" src="src/scripts/visible.js"></script>-->
<!--	<script type="text/javascript" src="src/scripts/sidebar.js"></script>-->
	<script type="text/javascript" src="src/scripts/slideshow/main.js"></script>

	</body>
</html>