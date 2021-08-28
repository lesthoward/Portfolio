import { getLanguageTexts } from './api';
import { navbarDOM, paragraphDOM } from './intoDOM';

async function changeLanguage(lang) {
	const object = await getLanguageTexts();
	const objectLang = object[lang];

	const { personal_information } = objectLang;
	// First Look in page
	const sloganTitle = document.querySelector('.slogan__title');
	const sloganArr = document.querySelector('.slogan__text');
	const sloganProfession = document.querySelector('.slogan__profession');
	const authorParagraph = document.querySelector('.firstlook__paragraph');
	sloganTitle.textContent = personal_information.slogan_title;
	sloganArr.textContent = '';
	sloganProfession.textContent = personal_information.profession;
	authorParagraph.textContent = personal_information.description;

	// Setion Titles
	const { sectionTitle } = objectLang;
	document.querySelector('.title__projects').textContent = sectionTitle[0];
	document.querySelector('.title__technologies').textContent =
		sectionTitle[1];
	document.querySelector('.title__info').textContent = sectionTitle[2];

	// Info Section
	const { about } = objectLang;
    paragraphDOM(about)
	
    navbarDOM(objectLang.navbar)

    return {object, objectLang}
}
export default changeLanguage;
