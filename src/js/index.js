import TypeWritter from './classes/typewritter';
import { navEventClick, findProjectInArr } from './functions'
import { singleProjectDOM, technologiesDOM } from './intoDOM';
import changeLanguage from './translate'

// Styles
import('../scss/index.scss')




let language = 'EN'
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
        }
    }   
})


function projectSection (projects) {
    singleProjectDOM(projects)
    // findProjectInArr(objectTranslated.projects)

    const $seachProject = document.querySelector('#searchProject')
    .addEventListener('input', (e) => {
        findProjectInArr(objectTranslated.projects, e.target.value.toLowerCase().trim())
    })

}