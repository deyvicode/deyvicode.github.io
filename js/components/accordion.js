const accordion = document.querySelectorAll('.accordion-header')

accordion.forEach(element => {
    element.addEventListener('click', function (e) {
        e.target.parentElement.classList.toggle('active')
    })
})