//Click counter
let count = 0;

const button = document.getElementById('clickBtn');
const counterDisplay = document.getElementById('counter');

button.addEventListener('click', function() {
    count++; //adds one each times it's clicked
    counterDisplay.textContent = count; //updating every time is is clicked
})

//Calculate tip
function calculateTip() {
    const bill = parseFloat(document.getElementById('billInput').value); //input for bill amount
    const tipPercent = parseFloat(document.getElementById('tipInput').value); //input for tip percentage
    const people = parseFloat(document.getElementById('peopleInput').value); //input for people

    const tipAmount = bill * (tipPercent / 100); //calculates tip amount
    const total = bill + tipAmount; //adds tip amount to the bill to get total
    const perPerson = total / people; //gives per person amount

    document.getElementById('result').textContent = perPerson.toFixed(2);
}
document.getElementById('calculateBtn').addEventListener('click', calculateTip); //when button is clicked, it will calculate total per person

//Random quote generator
const quotes = [
    "If you don't like the path you're walking, start paving another.",
    "Oppertunities don't happen, you create them.",
    "If you can't be kind, at least be vague.",
    "I am not young enough to know everything.",
    "The only thing we have to fear it fear itself."
]; //array of quotes

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quoteDisplay').textContent = quote;
} //randomizes quotes

document.getElementById('newQuoteBtn').addEventListener('click', showRandomQuote); //when clicked, the showRandomQuote function is carried out giving you a random quote

//To-do list
let tasks = []; //blank array for tasks

function renderTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.style.textDecoration = TextTrackList.done ? "line-through" : "none"; //when done the item will go away
        li.setAttribute('data-index', index);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "❌"; //delete button
        deleteBtn.classList.add('deleteBtn');
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}

document.getElementById('addBtn').addEventListener('click', () => {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    if (text !== "") {
        tasks.push({ text, done: false});
        input.value = "";
        renderTasks();
    }
}); //when add button is clicked, the list items will apprear beneath, each with the option to delete when done

document.getElementById('taskList').addEventListener('click', (e) => {
    const index = e.target.parentElement.getAttribute('data-index');

    if (e.target.classList.contains('deleteBtn')) {
        tasks.splice(index, 1);
    } else {
        tasks[index].done = !tasks[index].done;
    }

    renderTasks();
});

renderTasks();

//Digital Clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); //finds hours, always 2 digits
    const minutes = String(now.getMinutes()).padStart(2, '0'); //finds minutes, always 2 digits
    const seconds = String(now.getSeconds()).padStart(2, '0'); //finds seconds, always 2 digits

    const timeString = `${hours}:${minutes}:${seconds}`; //strings them together for a readable output
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000); //updates every second

updateClock(); //updates continually

//Color Change
const colors = ["#4287f5", "#10b579", "#c372d4", "#eb60bf", "#fbfca9"]
const cbutton = document.getElementById("colorBtn");

cbutton.addEventListener("click", () =>{
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

//Number Guessing Game
const gbutton = document.getElementById("guessBtn");
const resultText = document.getElementById("result2");

gbutton.addEventListener("click", () => {
    const userGuess = parseInt(document.getElementById("userGuess").value);

    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (userGuess === randomNumber) {
        resultText.textContent = `🎉 You Win! The number was ${randomNumber}.`;
        resultText.style.color = "green";
    } else {
        resultText.textContent = `❌ You lost! The number was ${randomNumber}.`;
        resultText.style.color = "red";
    }
});

//Simple Calculator
function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const output = document.getElementById("output");
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        output.textContent = "❌ Please enter valid numbers";
        return;
    }


    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                output.textContent = "⚠️ Cannot divide by zero";
                return;
            }
        result = num1 / num2;
        break;
        default:
        result = "Unknown operation";
    }
    output.textContent = `✅ Result: ${result.toFixed(2)}`;
}

//Image Slider
const images = [
    "https://media.istockphoto.com/id/1446199740/photo/path-through-a-sunlit-forest.jpg?s=612x612&w=is&k=20&c=TZAaOLGepD-filh7II7fkArDPp3ET13M7aoGKgm21G4=",
    "https://media.istockphoto.com/id/1502686868/photo/aerial-drone-view-of-green-lush-forest.jpg?s=612x612&w=is&k=20&c=NWFsiMXjPTNj4tK0zYPELTxK_vbBg2rO67eLtUnB82s=",
    "https://media.istockphoto.com/id/1491158797/photo/the-lush-green-trees-rise-up-into-the-air.jpg?s=612x612&w=is&k=20&c=xawKfUVbiO_HvjIMEg74Ss5Lh3oaWTixD2xUOyyQ0tU="
];

let currentIndex = 0;

const imgElement = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

imgElement.src = images[currentIndex];

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex -1) % images.length;
    imgElement.src = images [currentIndex];
});

//Form Validator
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        message.textContent = "❌ Please enter a valid email.";
        return;
    }

    if (password.length < 6) {
        message.textContent = "❌ Password must be at least 6 characters";
        return;
    }

    message.textContent = " ✅Login successful!";
});
