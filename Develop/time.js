//gets the data for the beginning date on our Header
function getDate() {
    var currentHeaderDate = moment().format('MMM Do YYY');
    $('#currentDay').text(currentHeaderDate);
}

$(document).ready(function  ()  {

    // First method to get todays info
console.log(moment());

console.log(moment().format());

$("currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));


})