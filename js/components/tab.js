const tabs = document.querySelectorAll('.tab .tab-links .card')
const contents = document.querySelectorAll('.tab .tab-contents .tab-content')

tabs.forEach((tab, index) => {
    tab.addEventListener('click', function() {
        tabs.forEach(el => {
            el.classList.remove('active')
        })

        tabs[index].classList.add('active')
        showContent(index)
    })
})

const showContent = index => {
    contents.forEach(content => {
        content.classList.remove('active')
    })

    contents[index].classList.add('active')
}