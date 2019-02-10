function beginMathPractice() {
    var x = document.getElementById("StartPage");
    var y = document.getElementById("MathPractice");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        mathSetup();
    }
}

function beginWordPractice() {
    var x = document.getElementById("StartPage");
    var y = document.getElementById("WordPractice");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}