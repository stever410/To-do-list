let toDoList = [];
const list = document.getElementById("to-do-list");

document.getElementById("add-btn").addEventListener("click", (event) => {
  let item = document.getElementById("thing-to-do").value;
  const itemHtml = `
    <li class="to-do-item">
    ${item}
    <span class="item-tool">
      <i class="fas fa-minus-square fa-lg"></i>
      <i class="fas fa-check-circle fa-lg"></i>
    </span>
  </li>`;
  if (item && item !== "") {
    toDoList.push(item);
    list.insertAdjacentHTML("beforeend", itemHtml);
    document.getElementById("thing-to-do").value = "";
  }
  console.log(toDoList);
});

document.getElementById("thing-to-do").addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("add-btn").click();
  }
});
