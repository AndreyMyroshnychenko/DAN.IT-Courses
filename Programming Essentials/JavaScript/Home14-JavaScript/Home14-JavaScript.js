$(document).ready(function(){
	$(".btn-slide").click(function(){
		$("#top-rated").slideToggle("slow")
		return false
	})
})

let screenHeight = window.screen.height
const topButton = document.createElement('a')
topButton.style.cssText = `position: fixed; padding: 20px; top: 20px; left: 20px; border: 2px solid pink; display: none;`
topButton.setAttribute('href', '#nav')
topButton.innerText = '^'
document.body.append(topButton)

document.addEventListener('scroll', () => {
	if(screenHeight <= pageYOffset){
		topButton.style.display = 'block'
	}else{
		topButton.style.display = 'none'
	}
})

$('a[href^="#"]').click(function(){
	let anchor = $(this).attr('href')
	$('html, body').animate({
		scrollTop:  $(anchor).offset().top
	}, 600)
})
