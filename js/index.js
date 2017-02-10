var items = [];

function addItem() {
    var j = 1,
    i = 0,
    fromDom = document.querySelectorAll('.inputitem');

    items.push("Item " + j);
    j++;

    for (i = 0; i < items.length; i++) {
        fromDom[i].style.display = "initial";
    };
}

function deleteItem(index) {
    console.log("Delete being called!");
    console.log(items.length);
    var fromDom = document.querySelectorAll('.inputitem');
    items.pop();
    console.log(items.length);
    fromDom[index].style.display = "none";
}


