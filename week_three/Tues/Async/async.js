
console.log("async.js");
// Establish menu items
const meals = ["hamburger", "pizza", "waffles", "bulgogi", "crickets"];
const sides = ["fries", "salad", "coleslaw", "mashed potatos"];
const drinks = ["soda", "water", "juice", "milkshake"];

// Populate UI with items from above
const addOptionsToSelect = (SelectorID, OptionArray) => {
    $(`#${SelectorID}`).append('<option value="none" selected>--Please choose an option--</option>');
    for (let Option of OptionArray){
        $(`#${SelectorID}`).append(`<option id='${Option}' value='${Option}'>${Option}</option>`);
    }
}

addOptionsToSelect("mealSelect",meals);
addOptionsToSelect("sideSelect",sides);
addOptionsToSelect("drinkSelect",drinks);

/////////////////////////////////////////////////////// attempts
var shoppingCart = [];
const selectMeal = () =>{
    shoppingCart.push(document.getElementById('mealSelect').value); update(); return document.getElementById('mealSelect').value;
}
const selectDrink = () =>{
    shoppingCart.push(document.getElementById('drinkSelect').value); update(); return document.getElementById('drinkSelect').value;
}
const selectSide = () =>{
    shoppingCart.push(document.getElementById('sideSelect').value); update(); return document.getElementById('sideSelect').value;
}
const update = () =>{
    for (let item of shoppingCart){
        if ($(`#${item}li`).length==0)
            $('#cart').append(`<li id='${item}li'>${item}</li>`)
    }
}
////////////////////////////////////////////////////// first attempt at async promise

const placeOrder = () => {
    console.log("LOG");
    alert("ALERT");
    orderstring = shoppingCart.join();
    alert(`Ordered ${orderstring}`);
}
async () => { Promise.all([selectDrink(),selectMeal(),selectSide()]).then(placeOrder) }