// Init the Emailjs plugin
(function () {
	// https://dashboard.emailjs.com/admin/account
	emailjs.init("pB1-6hnSAgx0BhbJ9");
})();

// Listens for the submit, and then sends a server request for it to be sent to the
// email address provided
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
