var wrongCount = 0;
var mathX = Math.random() * screen.width; // X coordinate for the cross
var mathY = Math.random() * screen.height; // Y coordinate for the cross
var x = document.getElementById("xPicture");

window.onload = function () {
    GenerateTreasure();
    x.style.visibility = "hidden";
}

document.onclick = function (event) {
    // insures that the user clicks within 30px are registered, if not goes to else.
    if (event.pageX > mathX - 30 && event.pageX < mathX + 30 && event.pageY > mathY - 30 && event.pageY < mathY + 30) {
        c = confirm("You've won, try again?")
        if (c == true) {
            GenerateTreasure();
            wrongCount = 0;
        }
    }
    else {
        if (wrongCount == 5) {
            alert("You've lost, resetting wrong counter!");
            wrongCount = 0;

            GenerateTreasure();
        }
        else {
            wrongCount++;
            alert(wrongCount + " wrong");
        }
    }

    GuideUser(event.pageX, event.pageY);
}

// Generates new coorindates for the cross
function GenerateTreasure() {
    mathX = Math.random() * screen.width;
    mathY = Math.random() * screen.height;

    x.style.left = mathX + "px";
    x.style.top = mathY + "px";
}

function GuideUser(coordX, CoordY) {
    message = "";
    if (coordX < mathX - 30) {
        message += "Right ";
    }
    else if (coordX > mathX + 30) {
        message += "Left ";
    }

    if (CoordY < mathY - 30) {
        message += "Down";
    }
    else if (CoordY > mathY + 30) {
        message += "Up";
    }

    alert(message);
}

// Turns the x invsibile for testing purposes
function VisibilityOn() {
    if (x.style.visibility == "hidden") {
        x.style.visibility = "visible";
    }
    else {
        x.style.visibility = "hidden";
    }
}