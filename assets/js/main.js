function resetActive() {
	document.querySelector('html').classList.add('loading');
	// Remove active classname from all elements
	var elements = document.querySelectorAll('.active')
	for (var i = 0; i < elements.length; ++i){
		elements[i].classList.remove('active', 'small', 'medium', 'large', 'left','right');
	};
	// Function to select random attribute
	// Random widths
	var widths = ["small", "medium", "large"];
	var floats = ["right", "left"];
	// Random Properties
	var posterProperties = ['promoting','process','colour','year','designer','orientation'];
	var selectedProperty = posterProperties[Math.floor(Math.random() * posterProperties.length)];
	// Select value of property

	// Update notices on front end
	document.getElementById('poster__property').innerHTML = selectedProperty;
	// document.getElementById('poster__value').innerHTML = selectedValue;
	// Function to add active class to all elements matching random attribute
	var selectedPosters = document.querySelectorAll('[data-colour="Red"]'); // Placeholder
	for (var i = 0; i < selectedPosters.length; ++i){
		// Ideally these would be separated into their own functions but I want to speed up the javascript because there's so many images, so instead of doing multiple iterations they're all done here.
		// Set random float
		var selectedFloat = floats[Math.floor(Math.random()*floats.length)];
		// Set random width
		var selectedWidth = widths[Math.floor(Math.random()*widths.length)];
		// Set classnames
		selectedPosters[i].classList.add('active', selectedFloat, selectedWidth);
	};

	var list = document.querySelector('.main'), i;

	for (i = list.children.length; i >= 0; i--) {
		list.appendChild(list.children[Math.random() * i | 0]);
	};
	removeLoading();
}

function removeLoading() {
	document.querySelector('html').classList.remove('loading');
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("shuffle").onclick = resetActive;
});
