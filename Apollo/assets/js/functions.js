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

	const prevBtn = document.querySelector('.prev');
	const nextBtn = document.querySelector('.next');

	const slides = document.querySelectorAll('.banner li');
	let currentSlide = 0;
	
	prevBtn.addEventListener('click', function() {
		currentSlide--
		if (currentSlide < 0) {
			currentSlide = slides.length -1;
		}

		showSlide(currentSlide);
	});
	
	nextBtn.addEventListener('click', function() {
		currentSlide++
		if (currentSlide > slides.length -1) {
			currentSlide = 0;
		}

		showSlide(currentSlide);
	});

	function showSlide(slide) {
		slides.forEach((slide) => {
		  slide.classList.remove('active');
		});
	  
		slides[slide].classList.add('active');
	  }
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});
