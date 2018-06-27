
const completeItem = (e) => {
    $('#donelist').append(e.currentTarget);
    e.currentTarget.onclick=undoItem;
    e.currentTarget.className="completes";
};

const undoItem = (e) => {
    $('#todolist').append(e.currentTarget);
    e.currentTarget.onclick=completeItem;
    e.currentTarget.className="todos";
}

const removeParent = (e) => {
    console.log(e.currentTarget.parentElement);
    e.currentTarget.parentElement.remove();
}

const addItem = (inString) => {

    let id = inString;
    while (id.indexOf(" ")!=-1)
        id=id.replace(" ","");

    if ($(`#${id}`).length===0){
        $('#todolist').append(`<li id="${id}">${inString}</li>`);
        newelement = document.getElementById(id);
        newelement.onclick=completeItem;

        $(`#${id}`).append(`<button id="${id}button"/>`);
        newelementButton = document.getElementById(`${id}button`);
        newelementButton.innerHTML = "X";
        newelementButton.onclick = removeParent;
        
     } else alert(`Item with id of ${id} already exists.`);
}


$('#addButton').on('click', (e) => {
    addItem($('#todoinput')[0].value);
})

