// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar: COMPLETED
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours: COMPLETED
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// this function replaces the current text content of #currentDay and displays a moment.js local date and time
function dateTime() {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

// this function calls the dateTime function every (1) second to dynamically update the time on webpage
setInterval(dateTime, 1000);

var hourArr = [
    {hour:'9'},
    {hour:'10'},
   {hour:'11'},
    {hour:'12'},
    {hour:'1'},
    {hour:'2'},
    {hour:'3'},
    {hour:'4'},
    {hour:'5'}
];

function timeblockColor() {
    var bizHour = $('.hour').data('hour')
    var currentHour = parseInt(moment().format('H'));
    var hourInput = $('#hour-input');
    console.log(bizHour)
    console.log(currentHour)

    if (bizHour >= 1 && bizHour <= 5) {
        bizHour = bizHour + 12;
    }
    if (bizHour < currentHour) {
        hourInput.addClass('past');
    }
    if (bizHour > currentHour) {
        hourInput.addClass('future');
    }
    if (bizHour == currentHour) {
        hourInput.addClass('present');
    }
};
timeblockColor();