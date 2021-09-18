let pageLocation = document.body.getBoundingClientRect().y
let currentLocation = 0
let navbar = document.getElementById('navbar')

window.addEventListener('scroll', function () {
    currentLocation = document.body.getBoundingClientRect().y
    if (pageLocation <= currentLocation) {
        navbar.style.top = '0'
        navbar.style.boxShadow = '0 .1rem .5rem #25262A'
    } else {
        navbar.style.top = '-80px'
    }

    if (currentLocation == 0) {
        navbar.style.boxShadow = 'none'
    }

    pageLocation = currentLocation
})


const menuIcon = document.getElementById('menu-icon')
const menuIconClose = document.getElementById('menu-icon-close')

menuIcon.addEventListener('click', function () {
    navbar.classList.add('animate')
})

menuIconClose.addEventListener('click', function () {
    navbar.classList.remove('animate')
})

const linksMenuMobile = document.querySelectorAll('#navbar .container .main-menu a')

linksMenuMobile.forEach(element => {
    element.addEventListener('click', function () {
        navbar.classList.remove('animate')
    })  
})
