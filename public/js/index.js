// Make the footer relative once containerMain is at the bottom of the page
// This is to make sure the footer is at the bottom of the page
window.onscroll = function (ev) {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
		document.getElementById("footer").style.position = "relative";
	} else {
		document.getElementById("footer").style.position = "fixed";
	}
};
