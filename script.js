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