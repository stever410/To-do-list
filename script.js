let toDoList = [];
const LIST = document.getElementById("to-do-list");
const LINE_THROUGH = "to-do-item-checked";

//to-do obj
class toDoItem {
  constructor(text, checked, id) {
    this.text = text;
    this.checked = false;
    this.id = Date.now();
  }
}

// add to-do-item when click on add button
document.getElementById("add-btn").addEventListener("click", (event) => {
  let toDoText = document.getElementById("thing-to-do").value;
  const itemHtml = `
    <li class="to-do-item">
    ${toDoText}
    <span class="item-tool">
      <i class="fas fa-minus-square fa-lg"></i>
      <i class="fas fa-check-circle fa-lg"></i>
    </span>
  </li>`;
  if (toDoText && toDoText !== "") {
    let newToDoItem = new toDoItem(toDoText.trim());
    toDoList.push(newToDoItem);
    LIST.insertAdjacentHTML("beforeend", itemHtml);
    document.getElementById("thing-to-do").value = "";
  }
});

// allow pressing enter to add to-do-item
document.getElementById("thing-to-do").addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("add-btn").click();
  }
});

//check completed to-do-item
function completeToDo(index, element) {
  toDoList[index].checked = toDoList[index].checked ? false : true;
  element.parentNode.parentNode.classList.toggle(LINE_THROUGH);
  console.log(toDoList);
}

//delete to-do-item
function deleteToDo(index, element) {
  toDoList.splice(index, 1);
  element.parentNode.parentNode.parentNode.removeChild(
    element.parentNode.parentNode
  );
}

function indexInParent(node) {
  var children = node.parentNode.children;
  var num = 0;
  for (var i = 0; i < children.length; i++) {
    if (children[i] == node) return num;
    else num++;
  }
  return -1;
}

LIST.addEventListener("click", (event) => {
  const element = event.target;
  const elementClassName = element.className;
  let index = indexInParent(element.parentNode.parentNode);
  if (elementClassName.includes("fa-check-circle")) {
    completeToDo(index, element);
  } else if (elementClassName.includes("fa-minus-square")) {
    deleteToDo(index, element);
  }
});
