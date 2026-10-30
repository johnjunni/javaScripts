// 1st task
function ageTodays (){
    let age = document.getElementById("age").value;
    let result = document.getElementById("ageResult");

    let days = Number(age) * 365.25;
    result.textContent = `your age is approximatly ${days} days.`
}
// 2nd task
function hoursToSecond(){
    let hours = document.getElementById("hours").value;
    let result = document.getElementById("hoursResult");

    let seconds = Number(hours) *60*60

    result.textContent = `Your second is ${seconds} Seconds`
}


// 3rd task

function findNextInArray() {
    const numbers = [10, 20, 30, 40, 50];

    const input = document.getElementById("arrayNumber").value;
    const result = document.getElementById("arrayResult");

    if (input.trim() === "") {
        result.textContent = "Please enter a number.";
        return;
    }

    const number = Number(input);
    const index = numbers.indexOf(number);

    if (index === -1) {
        result.textContent = "Number not found in the array.";
    } else if (index === numbers.length - 1) {
        result.textContent = "This is the last element. No next element exists.";
    } else {
        result.textContent =
            `Array: [${numbers.join(", ")}]. Next element after ${number} is ${numbers[index + 1]}.`;
    }
}

function findNextNumber() {
    const input = document.getElementById("singleNumber").value;
    const result = document.getElementById("nextResult");

    if (input.trim() === "") {
        result.textContent = "Please enter a number.";
        return;
    }

    const number = Number(input);
    const nextNumber = number + 1;

    if (Number.isInteger(number)) {
        result.textContent =
            `Integer: ${number}. Next number is ${nextNumber}.`;
    } else {
        result.textContent =
            `Float: ${number}. Number after adding 1 is ${nextNumber}.`;
    }
}

// 4th task

function capitalizeName() {
    const input = document.getElementById("userName").value.trim();
    const result = document.getElementById("nameResult");

    if (input === "") {
        result.textContent = "Please enter your name.";
        return;
    }

    const capitalized =
        input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

    result.textContent = `Your name is: ${capitalized}`;
}

// 5th 

function calculateBMI() {
    const weight = Number(document.getElementById("weight").value);
    const height = Number(document.getElementById("height").value);

    const weightInput = document.getElementById("weight").value;
    const heightInput = document.getElementById("height").value;
    const result = document.getElementById("bmiResult");

    const bmi = weight / (height * height);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity range";
    }

    result.textContent =
        `Your BMI is ${bmi.toFixed(2)}. Category: ${category}.`;
}

// 6th task

function generateArray() {
    const numbers = [];

    // Generate 5 random integers between 1 and 100
    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        numbers.push(randomNumber);
    }

    const ends = getFirstAndLast(numbers);

    document.getElementById("randomArray").textContent =
        `Generated Array: [${numbers.join(", ")}]`;

    document.getElementById("arrayEnds").textContent =
        `First element: ${ends.first}, Last element: ${ends.last}`;
}

function getFirstAndLast(array) {
    return {
        first: array[0],
        last: array[array.length - 1]
    };
}

// 7th task


const firstInput = document.getElementById("num1");
const secondInput = document.getElementById("num2");
const sumInput = document.getElementById("sum");

sumInput.value = NaN;

function addNumbers() {
    const firstValue = parseInt(firstInput.value);
    const secondValue = parseInt(secondInput.value);

    sumInput.value = firstValue + secondValue;
}

firstInput.addEventListener("input", addNumbers);
secondInput.addEventListener("input", addNumbers);
