const darkMode = document.querySelector("#dark-mode");
const modeLogo = document.querySelector("#mode-logo");
const modeText = document.querySelector("#mode-text");

function setColorScheme(scheme) {
	switch (scheme) {
		case "dark":
			document.body.classList.remove("light-mode-variables");
			modeLogo.innerHTML = "light_mode";
			modeText.innerHTML = "Light Mode";
			window.localStorage.setItem("isDark", true);
			break;
		case "light":
			document.body.classList.remove("light-mode-variables");
			document.body.classList.add("light-mode-variables");
			console.log("added light mode");
			modeLogo.innerHTML = "mode_night";
			modeText.innerHTML = "Dark Mode";
			window.localStorage.setItem("isDark", false);
			break;
		default:
			document.body.classList.remove("light-mode-variables");
			modeLogo.innerHTML = "contrast";
			modeText.innerHTML = "OS Default";
			window.localStorage.setItem("isDark", true);
			break;
	}
}

function getPreferredColorScheme() {
	if (window.matchMedia) {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			return "dark";
		} else {
			return "light";
		}
	}
	return "dark";
}

function getSetColorScheme() {
	if (window.localStorage.getItem("isDark") === null) {
		setColorScheme(getPreferredColorScheme());
	} else if (window.localStorage.getItem("isDark") === "true") {
		setColorScheme("dark");
	} else if (window.localStorage.getItem("isDark") === "false") {
		setColorScheme("light");
	}
}

if (window.matchMedia) {
	var colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
	colorSchemeQuery.addEventListener(
		"change",
		setColorScheme(getPreferredColorScheme())
	);
}
