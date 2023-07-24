const display = document.querySelector(".display"),
    buttons = document.querySelectorAll("button"),
    specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//Define calculator base on clicked
const handleEquals = () => {
    if (output !== "") {
        output = eval(output.replace("%", "/100"));
    }
};

const handleAC = () => {
    output = "";
};

const handleDelete = () => {
    output = output.toString().slice(0, -1);
};

const handleSpecialChar = (btnValue) => {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
};

const calculate = (btnValue) => {
    if (btnValue === "=") {
        handleEquals();
    } else if (btnValue === "AC") {
        handleAC();
    } else if (btnValue === "DEL") {
        handleDelete();
    } else {
        handleSpecialChar(btnValue);
    }
    display.value = output;
};

//Add event listener to buttons
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
