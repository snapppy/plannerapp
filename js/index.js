/*TO-DO:
* When no tasks are made, display the default, Create a new task!
*/

var items = [];

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
    item = new Item(taskname, prioritylevel);
    items.push(item);

    sortItems();

    //loop to the length of the array, or 5 times at the max
    for (i = 0; i < ((items.length >= 5) ? 5:items.length); i++) {
        var task = document.querySelector('#task' + (i + 1));
        document.getElementById("tasklabel" + (i + 1)).innerHTML = items[i].taskName;
        task.style.display = "flex";
        colorItem(i);
    }

    var form = document.querySelector("#additemform-container");

    //make form fade out before disapearing.
    /*TO-DO: Make transition work for fade out*/

    form.style.opacity = 0;

    form.addEventListener("transitionend", addItemFormTransition(form),true);

}

function deleteItem(index) {

    var task = document.querySelector('#task' + (index + 1));
    items.pop();

    /*TO-DO: Make off screen transitions for deleting items.
    */

    task.style.left = "-400px";

    task.addEventListener("transitionend", function(e){
            task.style.display = "none";
            task.style.left = "0px";
        });
}

function sortItems() {
    //my sort, with a function expression, anonymous function.
    //with priority number 5 being on the front of the array
    items.sort(function(a, b) {
        return b.priorityLevel - a.priorityLevel;
    });
}

function colorItem(index) {
        var task = document.querySelector('#task' + (index + 1));
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
}

function addItemFormTransition(form) {
    if (form.style.display == "flex") {
        form.style.display = "none";
    } else {
        form.style.display = "flex";
    }
}

function taskTransition(task) {
    console.log("In the taskTransition function");
    if (task.propertyName === 'left') {
        console.log("if statement true");
        task.style.display = "none";
        task.style.left = "0px";
    }
}


