//using moment to get the current time
currentTime = moment();
//connected it to the current day spot in the html
currentDayEl = document.querySelector("#currentDay");
var displayDate = currentTime.format('MMMM Do YYYY');
currentDayEl.innerText = displayDate
//going to get my timeblock element
timeBlockEl = document.querySelectorAll(".time-block");

var checkTime = function(currentEl){
    var timeBlock = moment().hour(parseInt(currentEl.id))
    console.log(timeBlock)
    currentEl.id 
    //if element is in the past return past
    //if element is in the future return future
    //if element is in the present return present
}
for(i=0; i<=timeBlockEl.length-1; i++){
    //timeblock elements already have the class timeblock. If we just replaced the class with future or present
    //it would erase the class, so we want to add to the class
    timeBlockEl[i].class = timeBlockEl[i].class + " " + checkTime(timeBlockEl)

}