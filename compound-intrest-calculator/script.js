// // function
// // get values
// // condition
// // calcuate

// function calculate() {
//     const principal = parseInt(document.getElementById('principal').value);
//     const intrest = parseInt(document.getElementById('rate').value / 100);
//     const years = parseInt(document.getElementById('years').value);
//     const CI = principal * Math.pow((1 + intrest / 1), 1 * years);

//     if (!principal || isNaN(principal) || (principal <= 0)) {
//         document.querySelector('.principal-error').innerHTML = "Please input a valid number";
        
//     } else {
//         document.querySelector('.prinicpal-error').innerHTML = "";
//         // principal_status = true;
//     }

//     if (!intrest || isNaN(intrest) || (intrest <= 0)) {
//         document.querySelector('.intrest-error').innerHTML = "Please input a valid number";
//     } else {
//         document.querySelector('.intrest-error').innerHTML = "";
//         // intrest_status = true;
//     }

//     if (!years || isNaN(years) || (years <= 0)) {
//         document.querySelector('.years-error').innerHTML = "Please input a valid number";
//     } else {
//         document.querySelector('.years-error').innerHTML = "";
//         // years_error = true;
//     }
// }

// document.getElementById('principal').addEventListener('input', validatePrincipal);
// document.getElementById('rate').addEventListener('input', validateInterest);
// document.getElementById('years').addEventListener('input', validateYears);

// function validatePrincipal() {
//     const principal = parseInt(document.getElementById('principal').value);
//     if (isNaN(principal) || principal <= 0) {
//         document.querySelector('.principal-error').innerHTML = "Please input a valid number";
//     } else {
//         document.querySelector('.principal-error').innerHTML = "";
//     }
// }

// function validateInterest() {
//     const interest = parseFloat(document.getElementById('rate').value) / 100;
//     if (isNaN(interest) || interest <= 0) {
//         document.querySelector('.intrest-error').innerHTML = "Please input a valid number";
//     } else {
//         document.querySelector('.intrest-error').innerHTML = "";
//     }
// }

// function validateYears() {
//     const years = parseInt(document.getElementById('years').value);
//     if (isNaN(years) || years <= 0) {
//         document.querySelector('.years-error').innerHTML = "Please input a valid number";
//     } else {
//         document.querySelector('.years-error').innerHTML = "";
//     }
// }

// function calculate() {
//     const principal = parseInt(document.getElementById('principal').value);
//     const interest = parseFloat(document.getElementById('rate').value) / 100;
//     const years = parseInt(document.getElementById('years').value);

//     validatePrincipal();
//     validateInterest();
//     validateYears();

//     if (!isNaN(principal) && principal > 0 && !isNaN(interest) && interest > 0 && !isNaN(years) && years > 0) {
//         const CI = principal * Math.pow((1 + interest / 1), 1 * years);
//         document.querySelector('.intrest-total').innerHTML = "Compound Intrest: $" + CI.toFixed(1);
//     } else {
//         document.querySelector('.intrest-total').innerHTML = "";
//     }
// }

function calculate() {
    const principal = parseInt(document.getElementById('principal').value);
    const intrest = parseFloat(document.getElementById('rate').value / 100);
    const years = parseInt(document.getElementById('years').value);
    const CI = principal * Math.pow((1 + intrest / 1), 1 * years);

    let principal_status = false;
    let intrest_status = false;
    let  years_status= false;

    if (isNaN(principal) || (principal <= 0)) {
        document.querySelector('.principal-error').innerHTML = "Please Provide a Valid value";
       
    } else {
        document.querySelector('.principal-error').innerHTML = "";
        principal_status = true;
    }

    if (isNaN(intrest) || (intrest <= 0)) {
        document.querySelector('.intrest-error').innerHTML = "Please Provide a Valid value";
        
    } else {
        document.querySelector('.intrest-error').innerHTML = "";
        intrest_status = true;
    }

    if (isNaN(years) || (years <= 0)) {
        document.querySelector('.years-error').innerHTML = "Please Provide a Valid value";
        
    } else {
        document.querySelector('.years-error').innerHTML = "";
        years_status = true;
    }

    if (principal_status && intrest_status && years_status) {
        const CI = principal * Math.pow((1 + intrest / 1), 1 * years);
        document.querySelector('.intrest-total').innerHTML = "Compound Intrest: $" + CI.toFixed(1);
    } else {
        document.querySelector('.intrest-total').innerHTML = "";
    }
}