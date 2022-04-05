// function replaces the current text content of #currentDay and displays a moment.js local date and time
function dateTime() {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

// function calls the dateTime function every (1) second to dynamically update the time on webpage
setInterval(dateTime, 1000);

// this function assigns a class of past present or future depending on the time of day compared to the hour marked on the time-block
function timeblockColor() {

    // variable declaration selects elements with a class of hour, and target the data attribute 'data-hour' for each
    var bizHour = $('.input').data('number')

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

// save button click saves textarea input for each input box in local storage
$('.saveBtn').click(function() {
    var h9 = $('#h9').val();
    localStorage.setItem('hour9', h9);
    var h10 = $('#h10').val();
    localStorage.setItem('hour10', h10);
    var h11 = $('#h11').val();
    localStorage.setItem('hour11', h11);
    var h12 = $('#h12').val();
    localStorage.setItem('hour12', h12);
    var h13 = $('#h13').val();
    localStorage.setItem('hour13', h13);
    var h14 = $('#h14').val();
    localStorage.setItem('hour14', h14);
    var h15 = $('#h15').val();
    localStorage.setItem('hour15', h15);
    var h16 = $('#h16').val();
    localStorage.setItem('hour16', h16);
    var h17 = $('#h17').val();
    localStorage.setItem('hour17', h17);
});

// function loads saved input for each input box and persists even on reload
function load() {
    var sh9 = localStorage.getItem('hour9');
    $('#h9').val(sh9);
    var sh10 = localStorage.getItem('hour10');
    $('#h10').val(sh10);
    var sh11 = localStorage.getItem('hour11');
    $('#h11').val(sh11);
    var sh12 = localStorage.getItem('hour12');
    $('#h12').val(sh12);
    var sh13 = localStorage.getItem('hour13');
    $('#h13').val(sh13);
    var sh14 = localStorage.getItem('hour14');
    $('#h14').val(sh14);
    var sh15 = localStorage.getItem('hour15');
    $('#h15').val(sh15);
    var sh16 = localStorage.getItem('hour16');
    $('#h16').val(sh16);
    var sh17 = localStorage.getItem('hour17');
    $('#h17').val(sh17);
}

load();