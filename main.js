var victim = [];
var number = [];
var street = [];

do {
var victimName = prompt("Victim Name:");
var victimNumber = prompt("Victim's phone number");
var victimStreet = prompt("Victim's street");
victim.push(victimName);
number.push(victimNumber);
street.push(victimStreet);
var more = confirm("Do you have more victims to add?");
} while (more);


var volunteer = prompt("How Many Volunteers Are Available?");
while(isNaN(volunteer)) {
	alert("Please enter a valid number");
	volunteer = prompt("How Many Volunteers Are Available?");
}
var volName = [];
var volNumber = [];
var volStreet = [];
for(i=1;i<=volunteer;i++) {
    var Name1 = prompt("Volunteer's Name:");
    var Number1 = prompt("Volunteer's phone number");
    var Street1 = prompt("Volunteer's street");
    volName.push(Name1);
    volNumber.push(Number1);
    volStreet.push(Street1);
}

alert(victim.length + " People are currently in need" + "\n" +
		volName.length + " People are available to help");

