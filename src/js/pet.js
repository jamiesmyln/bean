var hunger = 0;

function feed() {
	if (hunger >= 0 && hunger <= 9) {
		hunger++;
		document.getElementById("hunger").style.width = hunger + "0%";
		console.log(hunger);
	}
};

function hungry() {
	if (hunger >= 1 && hunger <= 10) {
		hunger--;
		document.getElementById("hunger").style.width = hunger + "0%";
		console.log(hunger);
	}
};

//food button click: add to fullness
//hunger button click: subtract from fullness