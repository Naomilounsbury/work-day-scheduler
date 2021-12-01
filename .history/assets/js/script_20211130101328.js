//using moment to get the current time
currentTime = moment();
currentDayEl = document.querySelector("currentDay");
var displayDate = currentTime.format('MMMM Do YYYY');
currentDayEl.textContent = displayDate