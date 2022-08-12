const img = document.querySelectorAll('.image-to-show')
const imgWrapper = document.querySelector('.images-wrap')

img.forEach(item => item.style.display = 'none')
img[0].style.display = 'block'

function iterator(array, duration, index){

if(!document.querySelector('#Stop-button') && !document.querySelector('#Resume-button') && !document.querySelector('#timer')){
	const buttonStop = document.createElement('button')
	const buttonResume = document.createElement('button')
	const timer = document.createElement('span')

	buttonStop.setAttribute('id', 'Stop-button')
	buttonResume.setAttribute('id', 'Resume-button')
	timer.setAttribute('id', 'timer')

	buttonStop.prepend('stop')
	buttonResume.prepend('Resume')

	imgWrapper.before(buttonStop)
	imgWrapper.before(buttonResume)
	imgWrapper.before(timer)
}

	function counter (timeLeft) {
		let counterTimer = setInterval(() => {
			document.getElementById("timer").innerText = `${timeLeft.toFixed(1)}`
			timeLeft -= 0.1
			if(timeLeft < 0) {
			timeLeft = 2.996
			}
		}, 100)
		document.getElementById('Stop-button').addEventListener('click',() => clearInterval(counterTimer))
		document.getElementById('Resume-button').addEventListener('click', () => {
			clearInterval(counterTimer)
			clearInterval(counterTimer)
			}
		)

		}
counter(2.996)

let timer = setInterval(() =>  {
	img.forEach(item => item.style.display = 'none')
	img[index].style.display = 'block'
		index++
	if(index >= 4){
		clearInterval(timer)
		iterator(img, 3000, 0)
	}
}, duration)

	document.getElementById('Stop-button').addEventListener('click',() => clearInterval(timer))
	document.getElementById('Resume-button').addEventListener('click', () => {
		clearInterval(timer)
		img.forEach(key => {
			if(key.getAttribute('style') === 'display: block;'){
				const images = [...img]
				iterator(img, 3000, images.indexOf(key) + 1)
			}
		})
	})
}

iterator(img, 3000, 1)
