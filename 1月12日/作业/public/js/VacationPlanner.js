//say Hello to user
var name = window.prompt("Hello! Please enter your name");
var greeting = document.getElementById("greeting");
greeting.innerHTML += ", " + name;

//caculateDays
var enterDays = document.getElementById("enterDays");
enterDays.onclick = calculateDays;
function calculateDays(){
	var daysInput = document.getElementById("days");
	var days = daysInput.value;
	var daysMessage = document.getElementById("daysMessage")
	if (days < 4) {
		daysMessage.innerHTML = "Short trips are always worth it";
	}
	else if (days<7) {
		daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
	}
	else{
		daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!";
	}
	var hours = days * 24;
	var minutes = hours * 60;
	var seconds = minutes * 60;
	var hourMessage = document.getElementById("hoursMessage");
	var minutesMessage = document.getElementById("minutesMessage");
	var secondsMessage = document.getElementById("secondsMessage");
	hourMessage.innerHTML = "That means you'll be traveling for " + hours + " hours.";
	minutesMessage.innerHTML = "That means you'll be traveling for " + minutes + " minutes.";
	secondsMessage.innerHTML = "That means you'll be traveling for " + seconds + " seconds.";
	var timingNext = document.getElementById("timingNext");
	timingNext.removeAttribute("hidden");
	timingNext.onclick = function()
	{
		document.getElementById("budgetSection").removeAttribute("hidden");
	}
	
	var enterBudget = document.getElementById("enterBudget");
	enterBudget.onclick = calculateBudget;
	function calculateBudget()
	{
		var tripBudgetInput = document.getElementById("tripBudget");
		var tripBudget = tripBudgetInput.value;
		var exchangedTripBudget = tripBudget * 1.45;
		var tripExchangeMsg = document.getElementById("tripExchangeMsg");
		tripExchangeMsg.innerHTML = "That meand you'll need " + exchangedTripBudget + "NZD for your trip.";
		var dailyExchangedMsg = document.getElementById("dailyExchangeMsg");
		dailyExchangedMsg.innerHTML = "That means you can spend " + exchangedTripBudget/days + " NZD per day.";
		var exchange10Msg = document.getElementById("exchange10Msg");
		exchange10Msg.innerHTML = "You'll need " + 1.45*10 + " NZD for an item that would cost your 10 USD";
		var exchange500Msg = document.getElementById("exchange500Msg");
		exchange500Msg.innerHTML = "You'll need " + 1.45*500 + " NZD for an item that would cost you 500 USD";
		
	}
}




