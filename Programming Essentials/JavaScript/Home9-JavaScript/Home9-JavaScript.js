let tabNav = document.querySelectorAll('.tabs-title')
let tabContent = document.querySelectorAll('.tab-content')
let tabName

tabNav.forEach(item => {
    item.addEventListener('click',function(){
        tabNav.forEach(key => key.classList.remove('active'))
        item.classList.add('active')
        tabName = this.getAttribute('data-tab-name')
        tabContent.forEach(content => {
            (content.getAttribute('data-tab-content') === tabName) ? content.style.display = 'block' : content.style.display = 'none'
        })
    })
})
