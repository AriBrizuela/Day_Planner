// Gets the data for the beginning date on our Header
function getDate() {
    var currentHeaderDate = moment().format('MMM Do YYY');
    $("#CurrentDay").text(currentHeaderDate);
}