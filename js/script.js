function visibilidade() {
    var about = document.getElementById("about");
    about.classList.toggle("appear");
    displayValue();
}

function displayValue() {
    if(about.style.display == "none") {
        about.style.display = "flex";
    } else {
        about.style.display = "none";
    }
}