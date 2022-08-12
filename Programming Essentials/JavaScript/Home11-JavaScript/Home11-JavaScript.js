let action = document.querySelectorAll('.buttn')

	document.addEventListener('keydown', event => {

		action.forEach(item => {

			if (item.textContent === 'Enter'){

				if (event.code === 'Enter') {

					action.forEach(key => key.classList.remove('active'))
                    
					item.classList.add('active')}

			} else if (item.textContent === 'S'){
                
				if (event.code === 'KeyS') {
					action.forEach(key => key.classList.remove('active'))

					item.classList.add('active')}

			} else if (item.textContent === 'E'){


				if (event.code === 'KeyE') {

					action.forEach(key => key.classList.remove('active'))

					item.classList.add('active')}

			} else if (item.textContent === 'O'){

				if (event.code === 'KeyO') {
					action.forEach(key => key.classList.remove('active'))

					item.classList.add('active')}

			} else if (item.textContent === 'N'){

				if (event.code === 'KeyN') {
					action.forEach(key => key.classList.remove('active'))

					item.classList.add('active')}

			} else if (item.textContent === 'L'){

				if (event.code === 'KeyL') {

					action.forEach(key => key.classList.remove('active'))
					item.classList.add('active')}

			} else if (item.textContent === 'Z'){

				if (event.code === 'KeyZ') {
					action.forEach(key => key.classList.remove('active'))
					item.classList.add('active')}
                    
			}

		})
	})
