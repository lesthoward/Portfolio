import html from '/src/assets/technologies/html.svg'
import css from '/src/assets/technologies/css.svg'
import javascript from '/src/assets/technologies/javascript.svg'
import sass from '/src/assets/technologies/sass.svg'
import json from '/src/assets/technologies/json.svg'
import babel from '/src/assets/technologies/babel.svg'
import jest from '/src/assets/technologies/jest.svg'
import cypress from '/src/assets/technologies/cypress.svg'
import gulp from '/src/assets/technologies/gulp.svg'
import pug from '/src/assets/technologies/pug.svg'
import react from '/src/assets/technologies/react.svg'
import angular from '/src/assets/technologies/angular.svg'
import typescript from '/src/assets/technologies/typescript.svg'
import nodejs from '/src/assets/technologies/nodejs.svg'
const iconImports = {
    html,
    css,
    javascript,
    sass,
    json,
    babel,
    jest,
    gulp,
    cypress,
    pug,
    react,
    angular,
    typescript,
    nodejs
}

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

function navbarDOM (navContent, object='') {
    // El id de los enlaces no debe variar, sino en inglés
    const navbarENLinks = object.EN.navbar

    const navbarWrapper = document.querySelector('.navigation__nav');
    navbarWrapper.innerHTML = navContent
    .map((link, index) => { 
        // Different behind to links that are no redirects to another page
        let target  = '';
        let href = navbarENLinks
        if(link !== 'linkeding') {
            href = '#' + navbarENLinks[index]
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




function singleProjectDOM (projects, condicionalLength = 0) {
    const projectsContainer = document.querySelector('.projects__grid');
    projectsContainer.innerHTML = ''
    // NO FUNCIONA POR EL FUNCIONAMIENTO DEL RETURN DEL MAP, ESTÁ POR INDEX. PARA SOLUCIONAR DEBE SER AL ARREGLO LA RESTRICCIÓN
    // Order by rating number in project object
        projects.sort((a, b) => {
            !a['rating'] ? a['rating'] = 1 : null
            !b['rating'] ? b['rating']= 1 : null

            // Es importante que el a le reste a b 
            return b['rating'] - a['rating']
        })

    projectsContainer.innerHTML = projects
    .map((singleProject, index) => {

        
        let {title, description, preview, code, tools} = singleProject
        // Si el botón tiene un enlace de vista preview quiero mostrarlo, sino no hagas nada
        let btnPreview = ''
        if(preview) {
            btnPreview = `<a class="project__btn" id="preview" href="${preview}" target="_blank">Preview</a>`
        }

        // Si no hay ruta entonces redirige a la página principal. Por aquello que esté mal
        if(!code) {
            code = ''
        }

        function getTechnologyIcon (toolArr) {
            // Para equitar algún conflicto (todavía no traduzco)
            if (!toolArr) return
            // Dentro de este contenedor iran todo el HTML, solo se utiliza. No se muestra en el HTML
            const iconWrapper = document.createElement('div');
            // Ordenar los elementos del arreglo (mutable)
            // toolArr.sort((a, b) => 5- 10)
            // toolArr.sort()
            toolArr.forEach((singleTool) => {
                // Obtengo las referencias de las imagenes importadas dentro de los objectos
                const avaibleIconsName = Object.keys(iconImports)
                // Comprobar si existe dentro del objeto imports de las imágenes. Así funciona Webpack, es necesitario importar antes, si es desde javascript
                const existingIcons = avaibleIconsName.includes(singleTool) > -1
                if(existingIcons) {
                    const iconName = singleTool
                    // Encontrar el nombre dentro del objeto de importaciones
                    const iconImage = iconImports[singleTool]
                    iconWrapper.innerHTML += iconTemplate (iconName,iconImage)
                } 
                
                if(!existingIcons) {
                    iconWrapper.innerHTML += `<span class="projects__noicon">${singleTool}</span>`
                }
            })
            return iconWrapper.innerHTML
        }
        
        // Función para crear las imágenes desde afuera (en un principio iba realizarlo diferente, pero webpack transforma las imágenes por importación)
        function iconTemplate (iconName,iconUrl, extension = 'svg') {
            return `<div class="project__image" data-name="${iconName}">
                        <img class="projects__icon" src="${iconUrl}" >
                    </div>`
        }

        while(index < condicionalLength) {
            return `
            <div class="projects__box">
                <div class="projects__info">
                        <h4 class="projects__title">${title}</h4>
                        <!-- projects__title -->
                        <p class="projects__description">${description}</p>
                        <!-- projects__description -->
                    </div>
                    <!-- projects__info -->
                    <div class="projects__technologies">
                        ${getTechnologyIcon(singleProject.tools)}
                    </div>
                    <!-- projects__technologies -->
                    <div class="projects__buttons">
                        ${btnPreview}
                        <a class="project__btn" id="code" href="${code}" target="_blank">Code source</a>
                    </div>
                    <!-- projects__buttons -->
                </div>
              `
        }
        }).join('')


}

function loadMoreProjectsDOM (objectTranslated) {
    let loadmore = 3
    let contentLoaded;
    let adiccionalHeight = 50
    const mediaWidth = window.matchMedia('(min-width:768px)').matches
    if(mediaWidth) {
        adiccionalHeight = 200
    }


    document.querySelector('.loading__expandall .loading__quantiy')
        .textContent = `(${objectTranslated.projects.length})`

    document.querySelector('.loading__more .loading__quantiy')
        .textContent = `(${loadmore})`

    const $messageLoadedDOM = document.querySelector('.loading__complete'); 
    const scroll = document.querySelector('.scroll');
    // Load only 3 items more
    document.querySelector('.loading__more')
    .addEventListener('click', (e) => {
        loadmore += 3
        
        if(!contentLoaded) {
            singleProjectDOM(objectTranslated.projects, loadmore)
        } else {
            $messageLoadedDOM.style.display = 'block'
            setTimeout(function() {
                $messageLoadedDOM.style.display = 'none'
            }, 3000);
        }
        
        if(loadmore > objectTranslated.projects.length){
            contentLoaded = true
        }
        window.scroll(0, scroll.offsetTop + adiccionalHeight)
    })


    // Expand All
    document.querySelector('.loading__expandall')
    .addEventListener('click', (e) => {
        if(!contentLoaded) {
            singleProjectDOM(objectTranslated.projects, objectTranslated.projects.length)
        } else {
            $messageLoadedDOM.style.display = 'block'
            setTimeout(function() {
                $messageLoadedDOM.style.display = 'none'
            }, 3000);
        }
        window.scroll(0, scroll.offsetTop + adiccionalHeight)
        contentLoaded = true
    })
}

export {
    paragraphDOM,
    navbarDOM,
    technologiesDOM,
    singleProjectDOM,
    loadMoreProjectsDOM
}