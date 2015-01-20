var victimNum = prompt("How Many Victims Will Be Entered?");
while(isNaN(victimNum)) {
    alert("Please enter a valid number");
    victimNum = prompt("How Many Victims Will Be Entered?");
}
var victim = [];
var number = [];
var street = [];
for(i=1;i<=victimNum;i++) {
    var victimName = prompt("Victim Name:");
    var victimNumber = prompt("Victim's phone number");
    var victimStreet = prompt("Victim's street");
    victim.push(victimName);
    number.push(victimNumber);
    street.push(victimStreet);
}

var volunteer = prompt("How Many Volunteers Are Available?");
while(isNaN(volunteer)) {
	alert("Please enter a valid number");
	volunteer = prompt("How Many Volunteers Are Available?");
}
var volName = [];
var volNumber = [];
var volStreet = [];
for(i=1;i<=volunteer;i++) {
    var Name1 = prompt("Victim Name:");
    var Number1 = prompt("Victim's phone number");
    var Street1 = prompt("Victim's street");
    volName.push(Name1);
    volNumber.push(Number1);
    volStreet.push(Street1);
}

alert(victim.length + " People are currently in need" + "\n" +
		volName.length + " People are available to help");

