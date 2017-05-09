// Person abstract class
function Person(name, email, gender) {
	this.name = name;
	this.email = email;
	this.gender = gender;
};

Person.prototype = {
	getName: function() {
		return this.name;
	},
	getGender: function() {
		return this.gender;
	},
	getEmail: function() {
		return this.gender;
	},
	toString: function() {
		return `Name: ${this.name}, email: ${this.email}, gender: ${this.gender}`;
	}
}



// BootcampFacilitatorAssistant (BFA) class
function BFA(name, email, gender, groupName) {
	Person.call(this, name, email, gender);
	this.groupName = groupName;
	this.group = [];
}

BFA.prototype = new Person();
BFA.prototype.constructor  = BFA;
BFA.prototype.addGroupMember = function (camper) {
	this.group.push(camper);
	camper.setGroupName(this.groupName);
	camper.setBFAName(this.name);
}
BFA.prototype.printGroupMembers = function() {
	for (camper in this.group) {
		console.log(camper);
	}
}
BFA.prototype.getGroupName = function() {
	return this.groupName;
}

// Bootcamper class
function BootCamper(name, email, gender) {
	Person.call(this, name, email, gender);
	this.groupName = undefined;
	this.bfaName = undefined;
};

BootCamper.prototype = new Person();
BootCamper.prototype.constructor = BootCamper;

BootCamper.prototype.getGroupName = function () {
	return this.groupName;
}

BootCamper.prototype.setGroupName = function (groupName) {
	this.groupName = groupName;
}

// returns the name of the campers bootcamp facilitator assistant
BootCamper.prototype.getBFAName = function () {
	return this.bfa.getName();
}

// sets the name of the campers bootcamp facilitator assistant
BootCamper.prototype.setBFAName = function(bfaName) {
	this.bfaName = bfaName;
}