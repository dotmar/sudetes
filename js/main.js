// This solution below does not work in IE.
function dropdownMenu(){
	document.getElementById('menu').classList.toggle('responsive');
}
window.onclick = function(event) {
	event.target.matches = event.target.msMatchesSelector;
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