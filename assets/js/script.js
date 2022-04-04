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

// this function assigns a class of past present or future depending on the time of day compared to the hour marked on the time-block
function timeblockColor() {

    // variable declaration selects elements with a class of hour, and target the data attribute 'data-hour' for each
    var bizHour = $('.hour').data('hour')

    // variable declaration sets the current hour via moment.js as a number data-type to be compared to time-block hour
    var currentHour = parseInt(moment().format('H'));

    // variable declaration selects the textarea html tag to target and set specific classes
    var hourInput = $('.hour-input');
    
    // these statements compare the time-block hour data to the current moment.js hour, and set specific classes if the conditions are met
    if (bizHour < currentHour) {
        hourInput.addClass('past');
    }
    else if (bizHour > currentHour) {
        hourInput.addClass('future');
    }
    else if (bizHour == currentHour) {
        hourInput.addClass('present');
    }
};
timeblockColor();