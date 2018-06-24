console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
const midEarth = $('<section id="middle-earth"/>');

  // 2. append the section to the body of the DOM.
$('body').append(midEarth);

  // 3. use a for loop to iterate over the lands array that does the following:
for (let land of lands){
  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section
    if ($(`#${land}`).length===0)
        $('#middle-earth').append($(`<a id="${land}"/>`).append($(`<h1>${land}</h1>`)));
    else console.warn(`${land} already exists`);
  }
  document.getElementById('Mordor').scrollIntoView();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  // 1. display an unordered list of the hobbits in the shire.
  if ($('#The-Shire').length!=0)
      $('#The-Shire').append($('<ul id="shire-residents"/>'));
  else {
    console.error("The Shire does not exist");
    return 0;
  }

  console.log('Make hobbits');
  // 2. give each hobbit a class of "hobbit"

  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id
  for (let hobbitName of hobbits){
    let hobbitid = hobbitName.split(" ")[0];
    if ($(`#${hobbitid}`).length===0)
      $('#shire-residents').append($(`<li id="${hobbitid}" class="hobbit">${hobbitName}</li>`));
    else console.warn(`${hobbitName} already exists`);
  }
  document.getElementById('The-Shire').scrollIntoView();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  if ($('#Frodo').length===0){
    console.error("Frodo does not exist");
    return 0;
  }

  console.log("keep it safe");
  // 1. create an empty div with an id of 'the-ring'
        //const ring = $('<div id="the-ring">'); Why doesn't this work?
  const ring = document.createElement('div');
  ring.id = "the-ring";

  // 2. add the ring as a child of Frodo
        // $('#Frodo Baggins').append(ring); I gave Frodo an ID :(

  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  let hobbits = $('.hobbit');
  let Frodos = hobbits.filter(":contains('Frodo')");

  if ($('#the-ring').length===0)
    Frodos[0].append(ring);
  else console.warn('the ring already exists');
  // when you think you have given Frodo the ring, check in your Elements tab
  document.getElementById('Frodo').scrollIntoView();

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  if ($('#Mordor').length!=0)
    console.log("rise of sauron");
  else {
    console.error("Mordor does not exist");
    return 0;
  }
  // 1. display an unordered list of baddies in Mordor
    //const baddiesUL = $('<ul id="baddies"/>')
    const baddiesUL = document.createElement('ul'); baddiesUL.id = "baddies";
  // 2. give each of the baddies a class of "baddy"
    for (let bad of baddies){
      //baddies.append($(`<li id="${bad}" class="baddy">${bad}</li>`));
      let baddyid = bad.replace('The ','').split(" ")[0];
      if ($(`#${baddyid}`).length===0){
        let baddy = document.createElement('li'); baddy.id=baddyid; baddy.className="baddy"; baddy.innerHTML=bad;
        baddiesUL.append(baddy);
      } else console.warn(`${bad} already exists`);
    }
  // 3. remember to append them to Mordor

    $('#Mordor').append(baddiesUL);
    document.getElementById('Mordor').scrollIntoView();

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  if ($('#middle-earth').length===0){
    console.error("middle earth does not exist");
    return 0;
  }
  console.log("You're not alone");
  // 1. create an aside tag and append it to middle-earth below mordor
  $('#middle-earth').append('<aside id="buddies"/>');

  // 2. display an unordered list of buddies in the aside
  $('#buddies').append('<ul id="buddy-list"/>');

  // 3. give each of the buddies a class of "buddy"
  for (let bud of buddies){
    let buddyid=bud.split(" ")[0];
    if ($(`#${buddyid}`).length===0)
      $('#buddy-list').append(`<li id="${buddyid}" class="buddy">${bud}</li>`);
    else console.warn(`#${bud} already exists`);
  }
  document.getElementById('buddy-list').scrollIntoView();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {
  if ( ($('#Rivendell').length===0)   ||   ($('#Rivendell').length===0)  ){
    console.error("Requirements not met to leave the Shire");
    return 0;
  }
  console.log("Leave the shire.");
  let hobbits = $('.hobbit');
  $('#Rivendell').append('<ul id="rivendell-residents"/>')
  for (let hobbit of hobbits){
    //hobbit.detach();
    $('#rivendell-residents').append(hobbit);
  }
  document.getElementById('Rivendell').scrollIntoView();
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell

  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  if ($('#Strider').length===0){
    console.error("Strider does not exist");
    return 0;
  }

  console.log("Once and future king");
  // 1. change the buddy 'Strider' textnode to "Aragorn"
  $('#Strider').text("Aragorn");
  document.getElementById('Strider').scrollIntoView();
  // hint: You can get a list of elements by tag name, such as 'aside'

};


// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
    if ($('#middle-earth').length===0){
      console.error("middle earth does not exist");
      return 0;
    }


    console.log("I get by with a little help from my friends");
  // 1. create a new div with an id 'the-fellowship'
    let fellowshipDiv = document.createElement('div'); fellowshipDiv.id="the-fellowship";
  // 2. add an h1 with the text 'The Fellowship' to this new div
    let fellowshipH1 = document.createElement('h1'); fellowshipH1.id="fellowshipH1"; fellowshipH1.innerHTML="The Fellowship";
    fellowshipDiv.append(fellowshipH1);
  // 3. append the fellowship to middle-earth
    $('#middle-earth').append(fellowshipDiv);
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
    $('#the-fellowship').append('<ul id="fellowship-list"/>');
    for (let hobbit of $('.hobbit'))
      $('#fellowship-list').append(hobbit);
    for (let bud of $('.buddy'))
      $('#fellowship-list').append(bud);
    document.getElementById('the-fellowship').scrollIntoView();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  if ($('#Gandalf').length===0){
    console.error("Gandalf does not exist");
    return 0;
  }

  console.log("YOU SHALL NOT PASS");
  // 1. change the 'Gandalf' textNode to 'Gandalf the White'
    document.getElementById('Gandalf').scrollIntoView();
    $('#Gandalf').text("Gandalf the White");
  // 2. add a class "the-white" to this element
    $('#Gandalf').addClass("the-white");
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
    $('.the-white').css({ "background-color": "white", "border":"solid grey", });

  };

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  if ($('#Boromir').length===0){
    console.error("Boromir does not exist");
    return 0;
  }
  if ($('#Uruk-hai').length===0){
    console.error("The Uruk-hai do not exist");
    return 0;
  }

  console.log("Riiiiiiicola");
  // 1. create a pop-up alert that the horn of gondor has been blown
    alert("horn of gondor has been blown");
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
    $('#Boromir').css("text-decoration", "line-through");
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
    $('#Uruk-hai').remove();
    document.getElementById('Boromir').scrollIntoView();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  if ($('#Mordor').length==0){
    console.error("Mordor does not exist");
    return 0;
  }
  if (  ($('#Frodo').length===0)  ||  ($('#Samwise').length===0)   ){
    console.error("Frodo or Sam does not exist.");
    return 0;
  }


  console.log("The steps of mount doom");
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  $('#Mordor').append($('#Frodo'));
  $('#Mordor').append($('#Samwise'));
  // 2. add a div with an id of 'mount-doom' to Mordor
  $('#Mordor').append(`<div id="mount-doom"/>`);
  document.getElementById('Mordor').scrollIntoView();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  if ($('#baddies').length===0){
    console.error("baddies do not exist");
    return 0;
  }
  if ($('#the-ring').length===0){
    console.error("the ring does not exist");
  }


  console.log("My precious");
  // 1. Create a div with an id of 'gollum' and add it to Mordor
  if ($('#gollum').length===0)
    $('#baddies').append('<div id="gollum"/>')
  else console.warn("Gollum already exists");
  // 2. Move the ring from Frodo and give it to Gollum
  $('#gollum').append($('#the-ring'));
  // 3. Move Gollum into Mount Doom
  document.getElementById('gollum').scrollIntoView();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
    if ($('#shire-residents').length===0){
      console.error("Shire does not exist or has no homes.");
      return 0;
    }

    console.log("there's no place like home");
  // 1. remove Gollum and the Ring from the DOM
    $('#gollum').remove();
  // 2. remove all the baddies from the DOM
    for (let bad of $('.baddy'))
      bad.remove();
  // 3. Move all the hobbits back to the shire
    for (let hobbit of $('.hobbit'))
      $('#shire-residents').append(hobbit);
      document.getElementById('The-Shire').scrollIntoView();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});
