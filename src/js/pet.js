var hunger = 10;
var happy = 0;
var healthy = 0;
var happinessTimer = null;
var hungerTimer = null;

function init() {
	handleHappinessTimer();
	handleHungerTimer();
}

//Hungry
function addHunger() {
	if (hunger >= 0 && hunger <= 9) {
		hunger++;
		document.getElementById("hunger").style.width = hunger + "0%";
	}
}

function removeHunger() {
	if (hunger >= 1 && hunger <= 10) {
		hunger--;
		document.getElementById("hunger").style.width = hunger + "0%";
	}
}

function handleHungerTimer() {
	if(hungerTimer === null && hunger > 0) {
		hungerTimer = setInterval(function(){
			removeHunger();
			handleHungerTimer();
		}, 3000);
	} else if (hunger === 0) {
		clearInterval(hungerTimer);
	}
}

//Happy
function addHappiness() {
	if (happy >= 0 && happy <= 9) {
		happy++;
		document.getElementById("happy").style.width = happy + "0%";
	}
}

function removeHappiness() {
	if (happy >= 1 && happy <= 10) {
		happy--;
		document.getElementById("happy").style.width = happy + "0%";
	}
}

function handleHappinessTimer() {
	if(happinessTimer === null && happy < 10) {
		happinessTimer = setInterval(function(){
		 	addHappiness(); 
	 		handleHappinessTimer();
		}, 3000);
	} else if (happy === 10) {
		clearInterval(happinessTimer);
	}
}

//Healthy
function addHealth() {
	if (healthy >= 0 && healthy <= 9) {
		healthy++;
		document.getElementById("healthy").style.width = healthy + "0%";
	}
}

function removeHealth() {
	if (healthy >= 1 && healthy <= 10) {
		healthy--;
		document.getElementById("healthy").style.width = healthy + "0%";
	}
}
init();