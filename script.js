function nrButtons() {
    var number = document.getElementById("number").value;
    var randNumber = Math.floor(Math.random() * number) + 1;
    for (var i = 1; i <= number; ++i) {
        var btn = document.createElement("button");
        btn.innerHTML = "Click Me";
        btn.value = i;
        document.getElementById("display").appendChild(btn);

        if (randNumber == btn.value) {
            btn.addEventListener("click", function() {
                alert("You won!!!" +
                    "\nRefresh the browser to play again.");
            });
        } else {
            btn.addEventListener("click", function() {
                alert("Sorry!!! The winning button was " + randNumber +
                    "\nRefresh the browser to play again.");
            });
        }
    }
}