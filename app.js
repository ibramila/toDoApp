const input = document.querySelector("#input");
const button = document.querySelector("#button");
const list = document.querySelector("#list");
const btn = document.getElementById("btn-delete");

window.addEventListener("load", () => {
    let storedItem = JSON.parse(localStorage.getItem("todoList"));
    if (storedItem) {
        createListElement();
    }
});

const todos = JSON.parse(localStorage.getItem("todoList")) || [];

//! Create list scheme
const createElement = () => {
    todos.push({
        id: Math.floor(Math.random() * 100),
        title: input.value,
        checked: false,
    });

    console.log(todos);
    createListElement();
    input.value = "";

    //   todos add localstorage
    localStorage.setItem("todoList", JSON.stringify(todos));
};

//! Create ui scheme
const createListElement = () => {
    list.innerHTML = "";

    todos.map((el) => {
        const listElement = document.createElement("li");
        listElement.innerHTML = `
    <input type="checkbox"  checked="${el.checked}">
    <span>${el.title}</span>
    <button id="btn-delete">delete</button>`;

        list.appendChild(listElement);
    });
};

btn.addEventListener("click", deleteList)
button.addEventListener("click", createElement);

const deleteList = () => {
    listElement.remove();
}

//! Keypress for add when Enter button is clicked

input.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        button.click();
    }
});