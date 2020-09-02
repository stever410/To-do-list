let toDoList = [];
const list = document.getElementById("to-do-list");

document.getElementById('add-btn').addEventListener("click", (event) => {
    let item = document.getElementById('thing-to-do').value;
    const itemHtml = `<li class="to-do-item">${item}</li>`;
    event.preventDefault();
    if(item && item !== '') {
        toDoList.push(item);
        list.insertAdjacentHTML("beforeend", itemHtml);
        document.getElementById('thing-to-do').value = "";
    }
    console.log(toDoList);
});