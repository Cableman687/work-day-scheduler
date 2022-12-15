//Button Element
var $button = $('.btn');

//Save Status Element
const $saveStatus = $('.saveStatus');

//Date/Time elements
var currentTime = dayjs().format('h:mm A');
var currentDay = dayjs().format('dddd, MMMM D');
var currentHour = dayjs().get('hour');

//Time-Blocks & Array
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

//Time-Block Times & Array
const timeNine = dayjs().startOf('day').add(9,'hour').format('h');
const timeTen = dayjs().startOf('day').add(10,'hour').format('h');
const timeEleven = dayjs().startOf('day').add(11,'hour').format('h');
const timeTwelve = dayjs().startOf('day').add(12,'hour').format('h');
const timeThirteen = dayjs().startOf('day').add(13,'hour').format('h');
const timeFourteen = dayjs().startOf('day').add(14,'hour').format('h');
const timeFifteen = dayjs().startOf('day').add(15,'hour').format('h');
const timeSixteen = dayjs().startOf('day').add(16,'hour').format('h');
const timeSeventeen = dayjs().startOf('day').add(17,'hour').format('h');

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
$(function () {
  
  
  // Display the current date in the header of the page.
  $('#currentDay').text(currentDay + " - " + currentTime);

  // Update Times with in each time block using .text method.
  $('#hourNineContent').text(timeNine + "AM");
  $('#hourTenContent').text(timeTen + "AM");
  $('#hourElevenContent').text(timeEleven + "AM");
  $('#hourTwelveContent').text(timeTwelve + "PM");
  $('#hourThirteenContent').text(timeThirteen + "PM");
  $('#hourFourteenContent').text(timeFourteen + "PM");
  $('#hourFifteenContent').text(timeFifteen + "PM");
  $('#hourSixteenContent').text(timeSixteen + "PM");
  $('#hourSeventeenContent').text(timeSeventeen + "PM");

  var hourNineTextEl =  $('#hourNineText');
  console.log(hourNineTextEl.val());

  // Display 'Saved' status once saved button is clicked in later event-listener.
  function revealSavedStatus(){  

    $saveStatus.removeClass('hidden');

    setTimeout(function(){
      $saveStatus.addClass('hidden');
    },2000);

  }

  // Save inputs on-click into Time-Blocks into local storage against time-tags.
  function saveValues(){
    $button.on('click', function(event){
      event.preventDefault();
      
      var tag = event.currentTarget.id;
      var $input = $(this).closest('div').find("textarea").val();
  
      localStorage.setItem(tag, $input);

      
      //trigger save status reveal on click
      revealSavedStatus();
    })
  }
  



  // Retrieve stored event from local storage and render result
  function renderValues(){
    var storedNine= localStorage.getItem("nineSlotBtn");
    var storedTen= localStorage.getItem("tenSlotBtn");
    var storedEleven= localStorage.getItem("elevenSlotBtn");
    var storedTwelve= localStorage.getItem("twelveSlotBtn");
    var storedThirteen= localStorage.getItem("thirteenSlotBtn");
    var storedFourteen= localStorage.getItem("fourteenSlotBtn");
    var storedFifteen= localStorage.getItem("fifteenSlotBtn");
    var storedSixteen= localStorage.getItem("sixteenSlotBtn");
    var storedSeventeen= localStorage.getItem("seventeenSlotBtn");
 

    $('#hourNineText').text(storedNine);
    $('#hourTenText').text(storedTen);
    $('#hourElevenText').text(storedEleven);
    $('#hourTwelveText').text(storedTwelve);
    $('#hourThirteenText').text(storedThirteen);
    $('#hourFourteenText').text(storedFourteen);
    $('#hourFifteenText').text(storedFifteen);
    $('#hourSixteenText').text(storedSixteen);
    $('#hourSeventeenText').text(storedSeventeen);
  }

  //Call Save & Render functions
  saveValues();
  renderValues();

  //Assign past, present or future classes to Time-Blocks depending on time values
  for(var i = 0; i < timeBlockElements.length; i++){

    var dynamicHour = timeBlockElements[i].data('time');
    
    if(dynamicHour < currentHour){
      timeBlockElements[i].addClass("past");
    } else if(dynamicHour > currentHour){
      timeBlockElements[i].addClass("future");
    } else {
      timeBlockElements[i].addClass("present");
    } 


  }


 
});
