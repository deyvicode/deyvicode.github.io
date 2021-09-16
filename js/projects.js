let projects = []
const targetProjects = document.getElementById('grid-projects')

async function getProjectsData() {
    const response = await fetch('/data/projects.json')
    return response.json()
}

getProjectsData().then(data => {
    projects = data
    showProjects(projects)
})

const showProjects = projects => {
    let content = ''

    projects.forEach((project, index) => {
        content += `
            <div class="card-project">
                <div class="card-img">
                    <img src="${ project.gallery[0] }" alt="">
                </div>
                <div class="card-footer">
                    <div class="project-info">
                        <div class="project-name">${ project.name }</div>
                        <div class="project-company">${ project.company }</div>
                    </div>
                    <div class="project-more" onclick="showProject(${index})">Saber más</div>
                </div>
            </div>
        `
    })

    targetProjects.innerHTML = content
}

/*
//  MODAL
*/

const modalContainer = document.getElementById('modal-project')
const btnCloseModal = document.getElementById('btn-close-modal')

const projectGallery = document.getElementById('carousel-gallery')
const projectName = document.getElementById('project-name')
const projectCompany = document.getElementById('project-company')
const projectDescription = document.getElementById('project-description')
const projectTechs = document.getElementById('list-technologies')

const showProject = index => {

    loadContentModal(index)

    modalContainer.classList.add('show')
    document.body.style.overflow = 'hidden'
}

btnCloseModal.addEventListener('click', function () {
    modalContainer.classList.remove('show')
    document.body.style.overflow = 'auto'
})

const loadContentModal = index => {
    const project = projects[index]

    // gallery
    projectGallery.innerHTML = ''
    project.gallery.forEach(url => {
        let img = document.createElement('img')
        img.src = url

        projectGallery.appendChild(img)
    })

    // project info
    projectName.innerText = project.name
    projectCompany.innerText = project.company

    projectDescription.innerHTML = ''
    project.description.forEach(paragraph => {
        let p = document.createElement('p')
        p.innerText = paragraph

        projectDescription.appendChild(p)
    })

    projectTechs.innerHTML = ''
    project.technologies.forEach(tech => {
        let li = document.createElement('li')
        li.innerText = tech
        projectTechs.appendChild(li)
    })
}