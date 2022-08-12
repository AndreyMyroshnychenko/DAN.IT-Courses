function CreateNewUser(firstname, lastname, birthdate){
	this.birthdate = birthdate

	this.setFirstName = function (){
		return this.firstName = firstname
	}

	this.setLastName = function (){
		return this.lastName = lastname
	}
	this.getAge = function (){
		let nowTime = new Date()
		let today = new Date( nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate())
		let birth = new Date(+this.birthdate.substring(6,10), +this.birthdate.substring(3,5), +this.birthdate.substring(0,2))
		let dateOfBirth = new Date(birth.getFullYear(), birth.getMonth(), birth.getDate())
		let age = today.getFullYear() - birth.getFullYear()
		if (today < dateOfBirth) {
			age = age-1;
		}
		return age
	}
	this.getPassword = function () {
		return this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthdate.substring(6, 10);
	}
}
let newUser = new CreateNewUser(prompt("Enter your name"), prompt("Enter your surname"), prompt("Enter your date of birth in this format: (dd.mm.yyyy)"))

newUser.setFirstName()
newUser.setLastName()
newUser.getAge()
newUser.getPassword()

newUser.getLogin = function(){
	return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();}

console.log(newUser)
console.log(newUser.getAge())
console.log(newUser.getPassword())
