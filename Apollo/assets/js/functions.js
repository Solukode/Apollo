$( document ).ready(function() {

	const map = L.map('map', {
		center:[47.0572, -70.8419],
		zoom: 10,
		scrollWheelZoom: false
	});
	const baseMaps = {
		StreetView: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}),
		Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {layers: 'TOPO-WMS'}),
	};
	L.control.layers(baseMaps).addTo(map);
	baseMaps.StreetView.addTo(map);

	const next = u('.next');
	const prev = u('.prev');
	const slide1 = u('.banner li:nth-child(1)');
	const slide2 = u('.banner li:nth-child(2)');
	const slide3 = u('.banner li:nth-child(3)');

	function nextSlide() {
		if(slide1.hasClass('active')) {
			slide1.toggleClass('active');
			slide2.toggleClass('active');
		} else if (slide2.hasClass('active')) {
			slide2.toggleClass('active');
			slide3.toggleClass('active');
		} else {
			slide3.toggleClass('active');
			slide1.toggleClass('active');
		}
	}

	function prevSlide() {
		if(slide1.hasClass('active')) {
			slide1.toggleClass('active');
			slide3.toggleClass('active');
		} else if (slide2.hasClass('active')) {
			slide2.toggleClass('active');
			slide1.toggleClass('active');
		} else {
			slide3.toggleClass('active');
			slide2.toggleClass('active');
		}
	}

	next.on('click', nextSlide);
	prev.on('click', prevSlide);
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});
