const darkMode = document.querySelector("#dark-mode");
const modeLogo = document.querySelector("#mode-logo");
const modeText = document.querySelector("#mode-text");

function toggleMode() {
	console.log("toggleMode");
	document.body.classList.toggle("light-mode-variables");
	if (localStorage.getItem("isDark") == "true") {
		modeLogo.innerHTML = "mode_night";
		modeText.innerHTML = "Dark Mode";
		localStorage.setItem("isDark", false);
	} else {
		modeLogo.innerHTML = "light_mode";
		modeText.innerHTML = "Light Mode";
		localStorage.setItem("isDark", true);
	}
}

function setMode() {
	console.log("setmode");
	let dm = localStorage.getItem("isDark");
	if (dm === null) {
		localStorage.setItem("isDark", true);
		modeLogo.innerHTML = "light_mode";
		modeText.innerHTML = "Light Mode";
		return;
	}
	console.log(dm);
	if (dm == "true") {
		console.log("removed light mode");
		document.body.classList.remove("light-mode-variables");
		modeLogo.innerHTML = "light_mode";
		modeText.innerHTML = "Light Mode";
		window.localStorage.setItem("isDark", true);
	} else {
		document.body.classList.remove("light-mode-variables");
		document.body.classList.add("light-mode-variables");
		console.log("added light mode");
		modeLogo.innerHTML = "mode_night";
		modeText.innerHTML = "Dark Mode";
		window.localStorage.setItem("isDark", false);
	}
}
setMode();

function slide() {
	let menu = document.getElementById("menu");

	if (menu.style.top == "5rem") {
		menu.style.top = "-15rem";
	} else {
		menu.style.top = "5rem";
	}
}

function hamburger() {
	let hamburger = document.getElementById("hamburger");

	if (hamburger.className == "open") {
		hamburger.className = "";
	} else {
		hamburger.className = "open";
	}
}

// FORM emailJs

/***
 * Made to send mails through a server
 * This makes it easier since it will have template to send mails
 *
 */
(function () {
	// https://dashboard.emailjs.com/admin/account
	emailjs.init("pB1-6hnSAgx0BhbJ9");
})();

/**
 * Listens for the submit, and then sends a server request for it to be sent to the
 * email address provided
 *
 */
window.onload = function () {
	document
		.getElementById("contact-form")
		.addEventListener("submit", function (event) {
			event.preventDefault();
			const name = document.getElementById("nameCon").value;
			const fromName = document.getElementById("fromNameCon").value;
			const message = document.getElementById("messageCon").value;
			if (
				name == "" ||
				fromName == "" ||
				message == "" ||
				name == null ||
				fromName == null ||
				message == null
			) {
				alert("Please fill all the fields");
				return false;
			} else {
				// generate a five digit number for the contact_number variable
				this.contact_number.value = (Math.random() * 100000) | 0;
				// these IDs from the previous steps
				emailjs.send("service_m379ec3", "template_8se4qdf", this).then(
					function () {
						console.log("SUCCESS!");
						name.innerHTML = "";
						fromName.innerHTML = "";
						message.innerHTML = "";
					},
					function (error) {
						console.log("FAILED...", error);
					}
				);
			}
		});
};

// Make the footer relative once containerMain is at the bottom of the page
// This is to make sure the footer is at the bottom of the page
window.onscroll = function (ev) {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
		document.getElementById("footer").style.position = "relative";
	} else {
		document.getElementById("footer").style.position = "fixed";
	}
};
