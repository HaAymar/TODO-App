let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


form.addEventListener("submit", (e)=>{
    e.preventDefault(); // to keep the execusion stable
    console.log("Button clicked");
    formValidation(); //Because it will be executed at the time where there is a click in a Button 
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "*Post can not be blank";
        console.log("Failure")
    }
    else{
        msg.innerHTML = "";
        console.log("Success")
        acceptData(); // It will stock data in the variable "data"
    }
};

let data = {};

let acceptData = () => {
    data ["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
            <span class="options">
                <i onClick="editPost(this)" class="fas fa-edit"></i>
                <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
    </div>
    `
    input.value = "";
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}

let editPost = (e) => {
    e.parentElement.parentElement.remove();
    input.value = e.parentElement.previousElementSibling.innerHTML
}