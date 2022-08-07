let form = document.getElementById("form");
let inputText = document.getElementById("textInput");
let msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Element added");
    formValidation();
})


let formValidation = () => {
    if (inputText.value === "") {
        msg.innerHTML = "*Task cannot be blank";
        console.log("The form should not be blank!");
    }
    else {
        msg.innerHTML = "*Success";
        msg.style.color = 'green';
        console.log("Success");
    }
}

let data = {};

 