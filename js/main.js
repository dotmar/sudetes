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
		var blocksImages = document.getElementsByTagName('img');
		for (var i = 0; i < blocksImages.length; i++) {
			var currentImage = blocksImages.item(i);
			var newSource = currentImage.getAttribute('src').toLowerCase().replace('.jpg', '_s.jpg').replace('.jpeg', '_s.jpeg');
			currentImage.setAttribute('src', newSource);
		}
	}
}
imageToSepia();

function getTarget(e){
	if (!e){
		e = window.event;
	}
	return e.target || e.srcElement;
}

function addImgAsBg(e){
	var target = getTarget(e);
	var wrapper = target.firstChild;
	var image = wrapper.firstChild;
	var imgSource = image.getAttribute('src');
	var newBgImg = document.createElement('img');
	newBgImg.setAttribute('src', imgSource);
	newBgImg.setAttribute('id', 'peak-section__img');
	newBgImg.classList.add('peak-blocks__img', 'fade-in');
	var position = document.getElementById('peaks');
	position.appendChild(newBgImg);
}
function removeImgAsBg(e){
	var removeBgImg = document.getElementById('peak-section__img');
	var containerEl = removeBgImg.parentNode;
	containerEl.removeChild(removeBgImg);
}

//It doesn't work in the old IE versions
var elMountBlockOne = document.getElementById('block-one');
elMountBlockOne.addEventListener('mouseenter', function(e){
	addImgAsBg(e);
}, false);
elMountBlockOne.addEventListener('mouseleave', removeImgAsBg, false);

var elMountBlockTwo = document.getElementById('block-two');
elMountBlockTwo.addEventListener('mouseenter', function(e) {
	addImgAsBg(e);
}, false);
elMountBlockTwo.addEventListener('mouseleave', removeImgAsBg, false);

var elMountBlockThree = document.getElementById('block-three');
elMountBlockThree.addEventListener('mouseenter', function(e) {
	addImgAsBg(e);
}, false);
elMountBlockThree.addEventListener('mouseleave', removeImgAsBg, false);

var elMountBlockFour = document.getElementById('block-four');
elMountBlockFour.addEventListener('mouseenter', function(e) {
	addImgAsBg(e);
}, false);
elMountBlockFour.addEventListener('mouseleave', removeImgAsBg, false);

function firstLetter(){
	var paragraphs = document.getElementsByClassName('initial-letter');
	for (var i = 0; i < paragraphs.length; i++) {
		var initial = paragraphs[i].textContent.charAt(0);
		paragraphs[i].setAttribute('data-content', initial);
	}
}
firstLetter();