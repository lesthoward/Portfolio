import TypeWritter from './classes/typewritter';
import { navEventClick} from './functions'
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
    const fullObject = response.object
    const objectTranslated = response.objectLang
    
    // TYPEWRITTER ANIMATION
    const sloganArr = objectTranslated.personal_information.slogan
    typeWritter = new TypeWritter(sloganArr)
    typeWritter.callFuncions()

    // TECHNOLOGY SECTION
    technologiesDOM(fullObject.technologies)

    // PROJECT SETION
    projectsDOM(objectTranslated.projects)
  
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

            projectsDOM(objectTranslated.projects)
        }
    }   
})


function projectsDOM (projects) {
    
   singleProjectDOM(projects)
}