const display = document.getElementById('display');

// display function
function appendToDisplay(value) {
    display.value += value;
}

// clearDisplay function
function clearDisplay() {
    display.value = '';
}

// calculate function
function calculate() {
    try {
        display.value = eval(display.value); 
    }
    catch(error){
        display.value = "Error";
    }
}



// // variables to store input and result
// let input = '';
// let result = 0;

// // function to update input and display
// function updateInput(value) {
//     input += value;
//     displayResult(input);
// }

// // function to calculate the result
// function calculate() {
//     try {
//         result = eval(input);
//         displayResult(result);
//         input = '';
//     } catch (e) {
//         displayResult('Error');
//         input = '';
//     }
// }

// // function to display result
// function displayResult(displayValue) {
//     document.getElementById('result').innerText = displayValue;
// }

// // event listeners for number buttons
// document.querySelectorAll('.numbers button').forEach(button => {
//     button.addEventListener('click', function() {
//         updateInput(this.innerText);
//     })
// })

// // event listeners for operator buttons
// document.querySelectorAll('.operators button').forEach(button => {
//     button.addEventListener('click', function() {
//         if(this.id === 'equals') {
//             calculate();
//         } else {
//             updateInput(` ${this.innerText}`)
//         }
//     })
// })