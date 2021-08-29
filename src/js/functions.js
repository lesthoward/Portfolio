import { singleProjectDOM } from "./intoDOM";

function navEventClick() {
    const navigationToggle = document.querySelector('.navigation__togle');
    const navigationWrapper = document.querySelector('.navigation');
    const navigationLinks = document.querySelector('.navigation__nav');
    // Cuando se presiona un enlace quitar fomatear los enlentos de la navegación
    navigationLinks.addEventListener('click', (e) => {
        if(e.target.classList.contains('navigation__link')) {
            navigationToggle.classList.toggle('navigation__togle--open')
            navigationWrapper.classList.toggle('navigation--open')
        }
    })

    // Evento de click para abrir el menú
    navigationToggle.addEventListener('click', (event) => {
        navigationToggle.classList.toggle('navigation__togle--open')
        navigationWrapper.classList.toggle('navigation--open')
    })
}


function findProjectInArr (projects, inputValue) {
    if (projects.length <= 1) return
    let filteredProject = []

    projects.forEach((singleProject, index) => {
        singleProject.tools.forEach(uniqueTool => {
            
            if(uniqueTool.indexOf(inputValue) >= 0 || singleProject.title.toLowerCase().indexOf(inputValue) > -1) {
                const existe = filteredProject.some(filteredProject => {
                    return filteredProject === projects[index]
                })
                if(!existe) {
                    filteredProject.push(projects[index])
                }
            }
        })
    })
    singleProjectDOM(filteredProject)


    // Filtar todas las tecnologías existentes dentro de los array de objetos
    // for(let i = 0; i < projects.length; i++) {
    //     const projectTools = projects[i].tools
    //     for(let i = 0; i < projectTools.length; i++) {
    //         if(!toolsArr.includes(projectTools[i])) {
    //             toolsArr.push(projectTools[i])
    //         }
    //     }
    // }

}

export {
    navEventClick,
    findProjectInArr
}