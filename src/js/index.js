import TypeWritter from './classes/typewritter';
import { navEventClick} from './functions'
import { technologiesDOM } from './intoDOM';
import changeLanguage from './translate'

// Styles
import('../scss/index.scss')


let language = 'EN'
const $changeLanguageElements = document.querySelector ('.header__language');

// In
let typeWritter;

const init = async () => {
    await changeLanguage(language)
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


function projectsDOM (projects) {
    console.log(projects);
}


// Change language on click
$changeLanguageElements.addEventListener('click', async (event) => {
    if(event.target.classList.contains('header__image')) {
        language = event.target.dataset.lang 
        // Go to translate de website and get slogan array information
        if(typeWritter) {
            const sloganArr = await (await changeLanguage(language)).objectLang.personal_information.slogan
            typeWritter.setArrChanged(sloganArr)
        }
    }   
})