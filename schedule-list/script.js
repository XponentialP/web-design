const inputBox = document.getElementById('input-box');
const button = document.querySelector('.btn');
const schedulesList = document.querySelector('.schedules')

button.addEventListener('click', () => {
    if (inputBox.value === "") {
        alert("Input fields cannot be empty");

    }

    // else {
    //     document.querySelector('.error-msg').innerHTML = "";
    // }

    else {
        let li = document.createElement('LI');
        li.innerHTML = inputBox.value;
        schedulesList.appendChild(li);
        let span = document.createElement('SPAN');
        span.innerHTML = "Delete";
        span.style = 'color:red';
        li.appendChild(span);
    }
    inputBox.value = "";  
});

schedulesList.addEventListener('click', function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle('checked');
    } 
    else if (event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
}, false);

function saveData() {
    localStorage.setItem()
}