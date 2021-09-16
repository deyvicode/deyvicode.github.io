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