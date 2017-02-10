var items = [];

function Item(taskName, priorityLevel) {
    this.taskName = taskName;
    this.priorityLevel = priorityLevel;
}

function addItem() {
    var form = document.querySelector("#additemform");
    form.style.display = "initial";
    console.log("add item...");
}

function addNewItem() {
    var i = 0,
    taskname = document.getElementById("taskname").value,
    prioritylevel = document.getElementById("prioritylevel").value,
    item = new Item(taskname, prioritylevel),
    fromDom = document.querySelectorAll('.inputitem');
    items.push(item);

    document.getElementById("task" + (items.length)).innerHTML = document.getElementById("taskname").value;
    for (i = 0; i < items.length; i++) {
        fromDom[i].style.display = "initial";
    }

    var form = document.querySelector("#additemform");
    form.style.display = "none";
    console.log("add NEW item...");
}

function deleteItem(index) {
    console.log("Delete being called!");
    console.log(items.length);
    var fromDom = document.querySelectorAll('.inputitem');
    items.pop();
    console.log(items.length);
    fromDom[index].style.display = "none";
}


