const textarea = document.getElementById("editor");
textarea.value = localStorage.getItem("textarea");

textarea.addEventListener("keyup", function () {
	localStorage.setItem("textarea", textarea.value);
});

