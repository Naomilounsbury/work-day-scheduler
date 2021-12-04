//using moment to get the current time
currentTime = moment();
//connected it to the current day spot in the html
currentDayEl = document.querySelector("#currentDay");
var displayDate = currentTime.format('MMMM Do YYYY');
// var btn9 = document.getElementById("btn9")
var saveBtns = document.querySelectorAll(".saveBtn");
console.log(saveBtns)
console.log(document.getElementById(`btn9`).value)
for(var i=0; i<saveBtns.length; i++){
    console.log(saveBtns[i].value)
    saveBtns[i].addEventListener("click", function(){
        console.log(document.getElementById(`btn${saveBtns[i]}`))
    })
}
currentDayEl.innerText = displayDate
//going to get my timeblock element
timeBlockEl = document.querySelectorAll(".time-block");
//made a function called checkTime to check the current time to compare with the time on the scheduler
var checkTime = function(currentEl){
    //will maybe hit a block because will use 24 hours as ids but if the current time that I chose from moment is 12 hours they wont match up
    var timeBlock = moment().hour(parseInt(currentEl.id))
    console.log(timeBlock)
    //if the block hour id is less than the current time hour we return the class name past
    if (timeBlock.hour() < currentTime.hour()){
        return "past"
    }
    if (timeBlock.hour() > currentTime.hour()){
        return "future"
    }
    if (timeBlock.hour()=== currentTime.hour()){
        return "present"
    }
    
    //if element is in the past return past
    //if element is in the future return future
    //if element is in the present return present
}
for(i=0; i<=timeBlockEl.length-1; i++){
    //timeblock elements already have the class timeblock. If we just replaced the class with future or present
    //it would erase the class, so we want to add to the class
    //check time returns the new class
    //this creates regular time-block class with past future or present added to it. like when it returns past = "time-block past"

    timeBlockEl[i].className = timeBlockEl[i].className + " " + checkTime(timeBlockEl[i])
console.log(checkTime(timeBlockEl[i]))
}
var saveData = document.querySelector("saveBtn");

// saveData.addEventListener("click", function () {
//     var i = textarea.value
//     console.log()
//     var object = {
//         //key value pair, key being the name of the property within the object, the value being the actual data or content
//         hour: hour, text: text

//     }
    //pushing my scores onto my array
    // highScores.push(object)
    // //making my high scores object into a string
    // localStorage.setItem("highScores", JSON.stringify(highScores))