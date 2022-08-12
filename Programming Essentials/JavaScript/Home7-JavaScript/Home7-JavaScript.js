

const getBack = (array, parent) => {
	function flatten(arrSecond) {
		if (Array.isArray(arrSecond)) {
			return arrSecond.reduce(function(done,curr){
				return done.concat(flatten(curr))}, [])
		} else {
			return arrSecond;
		}
	}
	parent.innerHTML = flatten(array).map(item => `<li>${item}</li>`).join('')

}
getBack(['witcher', 'white witcher', 'white wolf',['cat','crazy cat','good cat', 'assistance', ['Ciri']], 'dark cat'], document.getElementById('task'))

setInterval(() => {
	const output = document.getElementById('task7')
	let time = `${+output.textContent - 1}`
		output.textContent = time
		if(time === '0'){
			document.getElementById('task').style.display = 'none'
			document.getElementById('task7').style.display = 'none'

		}}, 1000)
