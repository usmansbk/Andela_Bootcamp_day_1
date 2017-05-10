class Person {
	constructor(name, email, gender) {
		this.name = name;
		this.email = email;
		this.gender = gender;
	}

	getName() {
		return this.name;
	}

	getGender() {
		return this.gender;
	}

	getEmail() {
		return this.email;
	}

	toString() {
		return `Name: ${this.name}, email: ${this.email}, gender: ${this.gender};
	}
}

class BFA extends Person {
	constructor(name, email, gender, groupName) {
		super(name, email, gender);
		this.groupName = groupName;
		this.group = [];
	}

	addGroupMember(camper) {
		this.group.push(camper);
		camper.setGroupName(this.groupName);
		camper.assignBFA(this);
	}

	printGroupMembers() {
		for (camper in this.group) {
			console.log(camper.toString());
		}
	}

	getGroupName() {
		return this.groupName;
	}
}

class Bootcamper extends Person {
	constructor(name, email, gender) {
		super(name, email, gender)
		this.groupName = undefined;
		this.bfa = undefined;
	}

	getBFA() {
		return this.bfa;
	}

	toString() {
		return super.toString() + ", " + this.bfa.getName();
	}
}
