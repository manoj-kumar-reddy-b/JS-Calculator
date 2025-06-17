let buttons = document.getElementsByTagName("button");
let result = document.getElementById("result");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        let input = this.innerText;
        updateDisplay(input);
    }
}

function updateDisplay(input) {
    let currentDisplay = result.innerText;

    if (input === "C") {
        result.innerText = "0";
        return;
    }

    if (input === "DEL") {
        if (currentDisplay.length === 1) {
            result.innerText = "0";
        } else {
            result.innerText = currentDisplay.slice(0, -1);
        }
        return;
    }

    if (input === "=") {
        try {
            result.innerText = eval(currentDisplay);
        } catch {
            result.innerText = "Error";
        }
        return;
    }

    // Handle normal input
    if (currentDisplay === "0") {
        result.innerText = input;
    } else {
        result.innerText += input;
    }
}
