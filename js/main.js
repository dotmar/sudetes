// This solution below does not work in IE.
function dropdownMenu(){
	document.getElementById('menu').classList.toggle('responsive');
}
window.onclick = function(event) {
	//event.target.matches = event.target.msMatchesSelector;
	if (!event.target.matches('.navbar__icon')) {
		var dropdowns = document.getElementsByClassName('navbar__menu');
		var i;
		for (i=0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('responsive')) {
				openDropdown.classList.remove('responsive');
			}
		}
	}
}

// Replace image if sepia filtr doesn't work.
function imageToSepia(){
	var filtrState = document.querySelector('html');
	if (filtrState.classList.contains('no-cssfilters')){
		var blocksImages = document.getElementsByClassName('blocks__img');
		for (var i = 0; i < blocksImages.length; i++) {
			var currentImage = blocksImages.item(i);
			var newSource = currentImage.getAttribute('src').toLowerCase().replace('.jpg', '_s.jpg').replace('.jpeg', '_s.jpeg');
			currentImage.setAttribute('src', newSource);
		}
	}
}
imageToSepia();