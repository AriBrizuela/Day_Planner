var date = moment().format("MMM Do YYYY");
//gets the data for the beginning date on our Header
$("#currentDay").append(date);
// the ID I gave to the text area 
var time = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]

$(".SaveBtn").on("click", function()  {

    var time= $(this).parent().attr("id");

    localStorage.setItem(time);
    console.log(day);
}


$("#9").children("input").val(localStorage.getItem("9"));

$("#10").children("input").val(localStorage.getItem("10"));

$("#11").children("input").val(localStorage.getItem("11"));

$("#12").children("input").val(localStorage.getItem("12"));

$("#1").children("input").val(localStorage.getItem("1"));

$("#2").children("input").val(localStorage.getItem("2"));

$("#3").children("input").val(localStorage.getItem("3"));

$("#4").children("input").val(localStorage.getItem("4"));

$("#5").children("input").val(localStorage.getItem("5"));
