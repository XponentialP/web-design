// const inputBox = document.getElementById('input-box');
// const listContainer = document.getElementById('list-container');

// function addTask() {
//     if (inputBox.value === "") {
//         alert("Input field must not be empty");
//     }
//     else {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "Delete";
//         li.appendChild(span);
//     }
//     inputBox.value = "";
//     saveData();
// }

// listContainer.addEventListener("click", function (event) {
//     if(event.target.tagName === "LI"){
//         event.target.classList.toggle("checked");
//         saveData();
//     }
//     else if(event.target.tagName === "SPAN"){
//         event.target.parentElement.remove();
//         saveData();
//     }
// }, false);

// function saveData() {
//     localStorage.setItem("data", listContainer.innerHTML); 
// }

// function showTask() {
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();

const button = document.querySelector('.btn');
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

button.addEventListener('click', () => {
    if (inputBox.value === "") {
        alert("Input fields cannot be empty");
        
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "Delete";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();

})

listContainer.addEventListener('click', function (event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle('checked');
        saveData();

    } else if (event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

