function paragraphDOM (object) {
    // Generar Párrafo por cado uno en el objecto
	const paragraphsWrapper = document.querySelector('.info__content');
	paragraphsWrapper.innerHTML = '';
	for (let i = 0; i < object.length; i++) {
		paragraphsWrapper.innerHTML += `
            <p class="info__paragraph">${object[i]}</p>
        `;
	}
}

function navbarDOM (navContent) {
    const navbarWrapper = document.querySelector('.navigation__nav');
    navbarWrapper.innerHTML = navContent
    .map((link, index) => { 
        // Different behind to links that are no redirects to another page
        let target  = '';
        let href = ''
        if(link !== 'linkeding') {
            href = '#' + link
        } else {
            href = 'https://www.linkedin.com/in/lesthoward/'
            target = 'target="__blank"'
        }

    return` <a class="navigation__link" href="${href}" ${target}>
            <span class="navigation__highlight">0${index}.</span>
            ${link}
        </a> 
    `}).join('')
}


function technologiesDOM (technologies) {
    const technologiesWrapper = document.querySelector('.technologies__wrapper');
    technologiesWrapper.innerHTML = technologies
    .map(tech => `
        <div class="technologies__box">
            <div class="technologies__title">${tech}</div>
        </div>
    `).join('')
}

export {
    paragraphDOM,
    navbarDOM,
    technologiesDOM
}