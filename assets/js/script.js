//Button Elements
var nineSlotBtn = $('#nineSlotBtn');
var tenbSlotBtn = $('#tenSlotBtn');
var elevenSlotBtn = $('#elevenSlotBtn');

//Date/Time elements
var currentTime = dayjs().format('h:mm A');
var currentDay = dayjs().format('dddd, MMMM D');
// var currentHour = dayjs().get('hour');
var currentHour = 10;

//Time-Blocks
var hourNineEl = document.querySelector('#hourNine');
var hourTenEl = document.querySelector('#hourTen');
var hourElevenEl = document.querySelector('#hourEleven');
// var hourNineEl = document.querySelector('#hourNine');
// var hourNineEl = document.querySelector('#hourNine');
// var hourNineEl = document.querySelector('#hourNine');
// var hourNineEl = document.querySelector('#hourNine');
// var hourNineEl = document.querySelector('#hourNine');
// var hourNineEl = document.querySelector('#hourNine');

var timeBlockElements = [
  hourNineEl,
  hourTenEl,
  hourElevenEl,
]

//Block Times
const timeNine = dayjs().startOf('day').add(9,'hour').format('H');
const timeTen = dayjs().startOf('day').add(10,'hour').format('H');
const timeEleven = dayjs().startOf('day').add(11,'hour').format('H');

var times = [
  timeNine,
  timeTen,
  timeEleven,
]



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function (event) {
  
  
  // TODO: Add code to display the current date in the header of the page.

  $('#currentDay').text(currentDay + " - " + currentTime);

  // (WC)Update Times with in each time block using .text method.
  $('#hourNineContent').text(timeNine + "AM");
  $('#hourTenContent').text(timeTen + "AM");
  $('#hourElevenContent').text(timeEleven + "AM");

  

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  var hourNineTextEl =  $('#hourNineText');

  console.log(hourNineTextEl.val());

    
  
   

  // Save input
  nineSlotBtn.on('click', function(event){
    event.preventDefault();

    console.log("Nine Button Pressed!");
    localStorage.setItem('nineSlotValue', hourNineTextEl.val());
  })

  //Retrieve stored event from local storage and render result
  function renderValues(){
    var storedEvent = localStorage.getItem("nineSlotValue");

    console.log("Stored value: " + storedEvent);

    hourNineTextEl.text(storedEvent);
  }

  renderValues();
  


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //(WC) --For all timeblocks with dayJS hour values less than current Hour value, pass .past class.
  //(WC) --For all timeblocks with dayJS hour values greater than current Hour value, pass .future class.
  //(WC) --For all timeblocks with dayJS hour values equal to current Hour value, pass .presnt class.
  for(var i = 0; i < timeBlockElements.length; i++){

    var dynamicHour = timeBlockElements[i].dataset.time;
    
    if(dynamicHour < currentHour){
      timeBlockElements[i].classList.add("past");
    } else if(dynamicHour > currentHour){
      timeBlockElements[i].classList.add("future");
    } else {
      timeBlockElements[i].classList.add("present");
    } 


  }
  
  

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  



 
});
