/*
* When no tasks are made, display the default, Create a new task!
*/
window.onload = function() {
    /*TO-DO: Create a JSON object and store in local storage*/

    /*JavaScript Array*/
    var itemArray = [];

    localStorage.setItem("items", JSON.stringify(itemArray));

    createDefaultTask();
    var addButton = document.getElementById("addnewitembutton");
    addButton.ontouchstart = addItem;
}

/*JavaScript Object Prototype*/
function Item(taskName, priorityLevel) {
    this.taskName = taskName;
    this.priorityLevel = priorityLevel;
}

function addItem() {
    var form = document.querySelector("#additemform-container");

    setTimeout(function () {
        form.style.opacity = 100;
    }, 20);

    form.addEventListener("transitionend", addItemFormTransition(form),true);

}

function addNewItem() {
    var i = 0,
    taskname = document.getElementById("taskname").value,
    prioritylevel = document.getElementById("prioritylevel").value,
    items = JSON.parse(localStorage.getItem("items"));
    item = new Item(taskname, prioritylevel);
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
    sortItems();

    //loop to the length of the array, or 5 times at the max
    for (i = 0; i < ((items.length >= 5) ? 5:items.length); i++) {
        var task = document.querySelector('#task' + (i + 1));
        document.getElementById("tasklabel" + (i + 1)).innerHTML = items[i].taskName;
        task.style.left = "0px";
        task.style.display = "flex";
        colorItem(i);
    }

    var form = document.querySelector("#additemform-container");

    form.style.opacity = 0;
    form.addEventListener("transitionend", addItemFormTransition(form),true);
}

function deleteItem(index) {

    var task = document.querySelector('#task' + (index + 1)),
        items = JSON.parse(localStorage.getItem("items"));
    items.pop();
    localStorage.setItem("items", JSON.stringify(items));

    task.style.left = "-400px";

    task.addEventListener("transitionend", function(e){
            task.style.display = "none";
            task.style.left = "0px";
        });
}

function sortItems(items) {
    //my sort, with a function expression, anonymous function.
    //with priority number 5 being on the front of the array
    var items = JSON.parse(localStorage.getItem("items"));
    items.sort(function(a, b) {
        return b.priorityLevel - a.priorityLevel;
    });
    localStorage.setItem("items", JSON.stringify(items));
}

function colorItem(index) {
        var items = JSON.parse(localStorage.getItem("items")),
            task = document.querySelector('#task' + (index + 1));
        switch (items[index].priorityLevel) {
            case '0':
                task.style.backgroundColor = "#F8C6CF";
                break;
            case '1':
                task.style.backgroundColor = "#F4A1AF";
                break;
            case '2':
                task.style.backgroundColor = "#F07B90";
                break;
            case '3':
                task.style.backgroundColor = "#EC5670";
                break;
            case '4':
                task.style.backgroundColor = "#E83151";
                break;
            default:
                break;

        }
    localStorage.setItem("items", JSON.stringify(items));
}

function addItemFormTransition(form) {
    if (form.style.display == "flex") {
        form.style.display = "none";
    } else {
        form.style.display = "flex";
    }
}

function createDefaultTask() {
    var i = 0,
    item = new Item("Create a new task", '4'),
    items = JSON.parse(localStorage.getItem("items"));

    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));

    var task = document.querySelector('#task1');
    document.getElementById("tasklabel1").innerHTML = items[0].taskName;
    task.style.display = "flex";
    colorItem(0);

    console.log("createDefaultTask()");
    console.log(items);
    console.log(items[0].priorityLevel);

}


