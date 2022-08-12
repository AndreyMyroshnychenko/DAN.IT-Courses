
function CreateNewUser(name, surname){
	this.firstName = ""
	this.lastName = ""

	this.setFirstName = function (){
		return this.firstName = name
	}

	this.setLastName = function (){
		return this.lastName = surname
	}
}

let newUser = new CreateNewUser(prompt("Enter your name"), prompt("Enter your surname"))
newUser.setFirstName()
newUser.setLastName()

newUser.getLogin =function(){
	return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();}

console.log(newUser.getLogin())

//





