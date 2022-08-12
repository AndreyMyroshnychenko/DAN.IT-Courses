const button = document.querySelector('.change-theme')
const changer = document.getElementById('change')

if(localStorage.getItem('changeTheme') === 'purple-blue-theme'){
	changer.setAttribute('href', './purple-blue.css')
}else{
	changer.setAttribute('href', '')
}

button.addEventListener('click', event => {
	event.preventDefault()

	if( changer.getAttribute('href') === ''){
		changer.setAttribute('href', './purple-blue.css')
		localStorage.setItem('changeTheme', 'purple-blue-theme')
	} else{
		changer.setAttribute('href', '')
		localStorage.setItem('changeTheme', 'light')

	}
})
