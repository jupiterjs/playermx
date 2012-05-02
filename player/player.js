steal('./play.js',
	'./position.js',

	function() {
	var video = Popcorn("#trailer");

	new Play('#play', { video: video });
	new PlayerPosition('#position', { video: video });
});
