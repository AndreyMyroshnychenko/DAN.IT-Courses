const iconPassword = document.querySelectorAll('.icon-password');
const field = document.querySelectorAll('.input-field');
const firstField = document.getElementById('first-field');
const secondField = document.getElementById('second-field');
const button = document.querySelector('.btn');

iconPassword.forEach(item =>{

	item.addEventListener('click', function(){

		if(firstField.getAttribute('type') === 'password') {

			field.forEach(key => {

				key.setAttribute('type', 'text')
			})
			iconPassword.forEach(item => {

				item.classList.replace('fa-eye', 'fa-eye-slash')
			})

			}else{

			field.forEach(key => {
				key.setAttribute('type', 'password')

			})
			iconPassword.forEach(item => {

				item.classList.replace('fa-eye-slash', 'fa-eye')

			})
		}
	})
})
button.addEventListener('click', function(){

	if(firstField.value === secondField.value) {

		alert('You are welcome')
		error.remove()

	}else if(!document.getElementById('error')){
        
		const error = document.createElement('span')
		error.setAttribute('id', 'error')
		error.textContent = 'Значения не совпадают'
		error.style.display = 'block'
		secondField.after(error)
		error.style.color = 'red'

	}
})
