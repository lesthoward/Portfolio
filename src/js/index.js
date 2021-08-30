import animatingDOM from './animation';
import TypeWritter from './classes/typewritter';
import { navEventClick, findProjectInArr, } from './functions'
import { singleProjectDOM, technologiesDOM, loadMoreProjectsDOM } from './intoDOM';
import changeLanguage from './translate'

// Styles
import('../scss/index.scss')




let language = 'ES'
const $changeLanguageElements = document.querySelector ('.header__language');
// Class Instance
let typeWritter;

let fullObject;
let objectTranslated;

const init = async () => {
    // Show and hide navigation
    navEventClick()

    const response = await changeLanguage(language)
    fullObject = response.object
    objectTranslated = response.objectLang
    
    // TYPEWRITTER ANIMATION
    const sloganArr = objectTranslated.personal_information.slogan
    typeWritter = new TypeWritter(sloganArr)
    typeWritter.callFuncions()

    // TECHNOLOGY SECTION
    technologiesDOM(fullObject.technologies)

    // PROJECT SETION
    projectSection(objectTranslated.projects)

    // LOADMORE (PROJECT SETION)
    loadMoreProjectsDOM(objectTranslated)

    // ANIMATING DOM
    animatingDOM()
}
window.addEventListener('load', init)


// Change language on click
$changeLanguageElements.addEventListener('click', async (event) => {
    if(event.target.classList.contains('header__image')) {
        language = event.target.dataset.lang 
        // Go to translate de website and get slogan array information
        if(typeWritter) {

            // Full objects of content
            const response = await changeLanguage(language)
            fullObject = response.object
            objectTranslated = response.objectLang

            const sloganArr = objectTranslated.personal_information.slogan
            typeWritter.setArrChanged(sloganArr)

            projectSection(objectTranslated.projects)
            loadMoreProjectsDOM(objectTranslated)
        }
    }   
})


function projectSection (projects) {
    singleProjectDOM(projects, 3)

    const $seachProject = document.querySelector('#searchProject')
    .addEventListener('input', (e) => {
        findProjectInArr(objectTranslated.projects, e.target.value.toLowerCase().trim())
    })
    
}

// Click on scroll icon
document.querySelector('.firstlook__scroll')
    .addEventListener('click', () => {
        const sectionPointer = document.querySelectorAll('section')[1]
        sectionPointer.scrollIntoView({
            behavior: 'smooth'
        })
    
})

// Dark mode
document.querySelector('.darkmode')
    .addEventListener('click', () => {
        document.body.classList.toggle('dark')
        document.body.classList.toggle('light')
    })
