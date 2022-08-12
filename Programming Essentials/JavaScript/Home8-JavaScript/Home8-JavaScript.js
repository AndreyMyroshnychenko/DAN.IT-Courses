const field = document.getElementById('userInput')

field.addEventListener('focus', function (){
	this.style.border = '3px solid green'
})

field.addEventListener('blur', function () {
	if(field.value > 0){
		this.style.border = '1px solid #F2F2F2'
		field.style.color = 'green'
	    let span = document.createElement('span')
		span.setAttribute('id', 'price')
	    span.style.display = 'flex'
	    span.innerHTML = `<p>Current price: ${this.value}</p>`
	    let cancel = document.createElement('a')
	    cancel.style.cssText = 'height:10px; position:relative; top: 15px; left: 6px'
	    cancel.setAttribute('href', '#')
	    cancel.innerHTML = '<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n' +
		'\t viewBox="0 0 490 490" style="width: 8px" xml:space="preserve">\n' +
		'<polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 \n' +
		'\t489.292,457.678 277.331,245.004 489.292,32.337 "/>\n' +
		'</svg>'
		if(!document.getElementById('price')){
	    span.append(cancel)
	    field.before(span)
		}else{
			document.getElementById('price').innerHTML = `<p>Current price: ${this.value}</p>`
			document.getElementById('price').append(cancel)
		}
		cancel.addEventListener('click', () =>{
			document.getElementById('price').remove()
			field.value = ''})
		document.getElementById('error').remove()
	}
	else{
		let span = document.createElement('span')
		span.setAttribute('id','error')
		field.style.color = ''
		span.textContent = 'Please enter correct price'
		span.style.display = 'block'
		this.style.border = '1px solid red'
		if(!document.getElementById('error')){
		field.after(span)}
	}
})
