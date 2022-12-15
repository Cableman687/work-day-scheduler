//Button Elements
var $nineSlotBtn = $('#nineSlotBtn');
var $tenbSlotBtn = $('#tenSlotBtn');
var $elevenSlotBtn = $('#elevenSlotBtn');

var $Button = $('btn');

//Date/Time elements
var currentTime = dayjs().format('h:mm A');
var currentDay = dayjs().format('dddd, MMMM D');
// var currentHour = dayjs().get('hour');
var currentHour = 10;

//Time-Blocks
var $hourNine = $('#hourNine');
var $hourTen = $('#hourTen');
var $hourEleven = $('#hourEleven');
var $hourTwelve = $('#hourTwelve');
var $hourThirteen = $('#hourThirteen');
var $hourFourteen = $('#hourFourteen');
var $hourFifteen = $('#hourFifteen');
var $hourSixteen = $('#hourSixteen');
var $hourSeventeen = $('#hourSeventeen');

var timeBlockElements = [
  $hourNine,
  $hourTen,
  $hourEleven,
  $hourTwelve,
  $hourThirteen,
  $hourFourteen,
  $hourFifteen,
  $hourSixteen,
  $hourSeventeen,
]

//Block Times
const timeNine = dayjs().startOf('day').add(9,'hour').format('H');
const timeTen = dayjs().startOf('day').add(10,'hour').format('H');
const timeEleven = dayjs().startOf('day').add(11,'hour').format('H');
const timeTwelve = dayjs().startOf('day').add(12,'hour').format('H');
const timeThirteen = dayjs().startOf('day').add(13,'hour').format('H');
const timeFourteen = dayjs().startOf('day').add(14,'hour').format('H');
const timeFifteen = dayjs().startOf('day').add(15,'hour').format('H');
const timeSixteen = dayjs().startOf('day').add(16,'hour').format('H');
const timeSeventeen = dayjs().startOf('day').add(17,'hour').format('H');

var times = [
  timeNine,
  timeTen,
  timeEleven,
  timeTwelve,
  timeThirteen,
  timeFourteen,
  timeFifteen,
  timeSixteen,
  timeSeventeen,
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
  $nineSlotBtn.on('click', function(event){
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

    // var dynamicHour = timeBlockElements[i].dataset.time;
    var dynamicHour = timeBlockElements[i].data('time');
    
    if(dynamicHour < currentHour){
      timeBlockElements[i].addClass("past");
    } else if(dynamicHour > currentHour){
      timeBlockElements[i].addClass("future");
    } else {
      timeBlockElements[i].addClass("present");
    } 


  }
  
  

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  



 
});
