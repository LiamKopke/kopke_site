const theme = document.querySelector("#theme");
const modeLogo = document.querySelector("#mode-logo");
const modeText = document.querySelector("#mode-text");
const dropdown = document.querySelector(".dropdown-content");
const darkMode = document.querySelector("#dark-mode");
const lightMode = document.querySelector("#light-mode");
const osDefault = document.querySelector("#os-default");

function setColorScheme(scheme) {
	switch (scheme) {
		case "dark":
			document.body.classList.remove("light-mode-variables");
			modeLogo.innerHTML = "dark_mode";
			modeText.innerHTML = "Dark Mode";
			window.localStorage.setItem("isDark", true);
			break;
		case "light":
			document.body.classList.add("light-mode-variables");
			modeLogo.innerHTML = "light_mode";
			modeText.innerHTML = "Light Mode";
			window.localStorage.setItem("isDark", false);
			break;
		case "os-dark":
			document.body.classList.remove("light-mode-variables");
			modeLogo.innerHTML = "contrast";
			modeText.innerHTML = "OS Default";
			window.localStorage.setItem("isDark", null);
			break;
		case "os-light":
			document.body.classList.add("light-mode-variables");
			modeLogo.innerHTML = "contrast";
			modeText.innerHTML = "OS Default";
			window.localStorage.setItem("isDark", null);
			break;
	}
	dropdown.classList.add("hide");
}

function getPreferredColorScheme() {
	if (window.matchMedia) {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			return "os-dark";
		} else {
			return "os-light";
		}
	}
	return "dark";
}

// Event Listeners

if (window.matchMedia) {
	var colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
	colorSchemeQuery.addEventListener("change", () => {
		if (modeText.innerHTML === "OS Default") {
			setColorScheme(getPreferredColorScheme());
		}
	});
}

theme.addEventListener("click", function () {
	dropdown.classList.toggle("hide");
});

darkMode.addEventListener("click", function () {
	setColorScheme("dark");
});

lightMode.addEventListener("click", function () {
	setColorScheme("light");
});

osDefault.addEventListener("click", function () {
	setColorScheme(getPreferredColorScheme());
});
