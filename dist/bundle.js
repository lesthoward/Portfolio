/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLanguageTexts\": () => (/* binding */ getLanguageTexts)\n/* harmony export */ });\nasync function getLanguageTexts() {\r\n\ttry {\r\n\t\tconst url = 'https://api.npoint.io/39a2e7bad3aa723d5b65';\r\n\t\tconst request = await fetch(url);\r\n\t\treturn await request.json();\r\n\t} catch (err) {\r\n\t\tconsole.log(err);\r\n\t}\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://personal-portfolio/./src/js/api.js?");

/***/ }),

/***/ "./src/js/classes/typewritter.js":
/*!***************************************!*\
  !*** ./src/js/classes/typewritter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TypeWritter {\r\n    constructor(sloganArr, clickOn='') {\r\n        // Content\r\n        this.sloganArr = sloganArr\r\n        this.currentIndex = 0\r\n        this.indexLetter = 0\r\n        this.selectedWord = ''\r\n        this.originalText = ''\r\n        this.isDelating = false;\r\n        this.clickOn = clickOn\r\n        // Times\r\n        this.timeout = 0\r\n        this.timeTyping = 180\r\n        this.timeDelating = 150\r\n        this.timePause = 700\r\n        // Blink\r\n        this.sloganLine = document.querySelector('.slogan__line');\r\n        \r\n    }\r\n\r\n    callFuncions() {\r\n        const sloganText = document.querySelector('.slogan__text')\r\n        sloganText.textContent = this.originalText\r\n        this.selectedWord = this.sloganArr[this.currentIndex]\r\n        \r\n        if(!this.isDelating) {\r\n            this.typing()\r\n        } else {\r\n            this.deleting()\r\n        }\r\n\r\n        let timeout = setTimeout(() => this.callFuncions(), this.timeout); \r\n        if(this.clickOn) {\r\n            clearTimeout(timeout)\r\n            console.log('Click to pause');\r\n        }\r\n    }\r\n\r\n    typing () {\r\n        this.timeout = this.timeTyping\r\n        if(this.originalText === this.selectedWord) {\r\n            this.isDelating = true\r\n            this.sloganLine.classList.add('slogan__line--blink')\r\n            this.timeout = this.timePause\r\n            \r\n        } else {\r\n            this.indexLetter++\r\n        }\r\n        \r\n        // console.log(this.indexLetter);\r\n        this.originalText = this.selectedWord.substring(0, this.indexLetter)\r\n        \r\n    }\r\n    \r\n    deleting() {\r\n        this.timeout = this.timeDelating\r\n        this.indexLetter--\r\n        // Quitar animación\r\n        this.sloganLine.classList.remove('slogan__line--blink')\r\n        // Si cuando está borrando es igual a '' y el cursor a llegado al final del array significa que su cursor debe ser 0 y ejecutar la función de escribir otra vez\r\n        if(this.currentIndex === this.sloganArr.length - 1 && this.originalText === '') {\r\n            this.currentIndex = 0\r\n            this.isDelating = false\r\n            return\r\n        }\r\n        \r\n        // Si el texto está vacio y su estado está en borrar. El tiempo de duración se acorta y lo saca de esta función\r\n        if(this.originalText === '' && this.isDelating) {\r\n            this.isDelating = false\r\n            this.currentIndex++\r\n        }\r\n       \r\n        this.originalText = this.selectedWord.substring(0, this.indexLetter)\r\n        const sloganText = document.querySelector('.slogan__text')\r\n        sloganText.textContent = this.originalText\r\n    }\r\n\r\n    setArrChanged (sloganArr) {\r\n        this.sloganArr = sloganArr\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypeWritter);\n\n//# sourceURL=webpack://personal-portfolio/./src/js/classes/typewritter.js?");

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navEventClick\": () => (/* binding */ navEventClick),\n/* harmony export */   \"findProjectInArr\": () => (/* binding */ findProjectInArr)\n/* harmony export */ });\n/* harmony import */ var _intoDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intoDOM */ \"./src/js/intoDOM.js\");\n\r\n\r\nfunction navEventClick() {\r\n    const navigationToggle = document.querySelector('.navigation__togle');\r\n    const navigationWrapper = document.querySelector('.navigation');\r\n    const navigationLinks = document.querySelector('.navigation__nav');\r\n    // Cuando se presiona un enlace quitar fomatear los enlentos de la navegación\r\n    navigationLinks.addEventListener('click', (e) => {\r\n        if(e.target.classList.contains('navigation__link')) {\r\n            navigationToggle.classList.toggle('navigation__togle--open')\r\n            navigationWrapper.classList.toggle('navigation--open')\r\n        }\r\n    })\r\n\r\n    // Evento de click para abrir el menú\r\n    navigationToggle.addEventListener('click', (event) => {\r\n        navigationToggle.classList.toggle('navigation__togle--open')\r\n        navigationWrapper.classList.toggle('navigation--open')\r\n    })\r\n}\r\n\r\n\r\nfunction findProjectInArr (projects, inputValue) {\r\n    // Evitar problemas\r\n    if (projects.length <= 1) return\r\n    let filteredProject = []\r\n\r\n    projects.forEach((singleProject, index) => {\r\n        singleProject.tools.forEach(uniqueTool => {\r\n            \r\n            if(uniqueTool.indexOf(inputValue) >= 0 || singleProject.title.toLowerCase().indexOf(inputValue) > -1) {\r\n                const existe = filteredProject.some(filteredProject => {\r\n                    return filteredProject === projects[index]\r\n                })\r\n                if(!existe) {\r\n                    filteredProject.push(projects[index])\r\n                }\r\n            }\r\n        })\r\n    })\r\n    console.log(filteredProject);\r\n    (0,_intoDOM__WEBPACK_IMPORTED_MODULE_0__.singleProjectDOM)(filteredProject, filteredProject.length)\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://personal-portfolio/./src/js/functions.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_typewritter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/typewritter */ \"./src/js/classes/typewritter.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/js/functions.js\");\n/* harmony import */ var _intoDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intoDOM */ \"./src/js/intoDOM.js\");\n/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translate */ \"./src/js/translate.js\");\n\r\n\r\n\r\n\r\n\r\n// Styles\r\n__webpack_require__.e(/*! import() */ \"src_scss_index_scss\").then(__webpack_require__.bind(__webpack_require__, /*! ../scss/index.scss */ \"./src/scss/index.scss\"))\r\n\r\n\r\n\r\n\r\nlet language = 'ES'\r\nconst $changeLanguageElements = document.querySelector ('.header__language');\r\n// Class Instance\r\nlet typeWritter;\r\n\r\nlet fullObject;\r\nlet objectTranslated;\r\n\r\nconst init = async () => {\r\n    // Show and hide navigation\r\n    (0,_functions__WEBPACK_IMPORTED_MODULE_1__.navEventClick)()\r\n\r\n    const response = await (0,_translate__WEBPACK_IMPORTED_MODULE_3__.default)(language)\r\n    fullObject = response.object\r\n    objectTranslated = response.objectLang\r\n    \r\n    // TYPEWRITTER ANIMATION\r\n    const sloganArr = objectTranslated.personal_information.slogan\r\n    typeWritter = new _classes_typewritter__WEBPACK_IMPORTED_MODULE_0__.default(sloganArr)\r\n    typeWritter.callFuncions()\r\n\r\n    // TECHNOLOGY SECTION\r\n    ;(0,_intoDOM__WEBPACK_IMPORTED_MODULE_2__.technologiesDOM)(fullObject.technologies)\r\n\r\n    // PROJECT SETION\r\n    projectSection(objectTranslated.projects)\r\n\r\n    // LOADMORE (PROJECT SETION)\r\n    ;(0,_intoDOM__WEBPACK_IMPORTED_MODULE_2__.loadMoreProjectsDOM)(objectTranslated)\r\n}\r\nwindow.addEventListener('load', init)\r\n\r\n\r\n// Change language on click\r\n$changeLanguageElements.addEventListener('click', async (event) => {\r\n    if(event.target.classList.contains('header__image')) {\r\n        language = event.target.dataset.lang \r\n        // Go to translate de website and get slogan array information\r\n        if(typeWritter) {\r\n\r\n            // Full objects of content\r\n            const response = await (0,_translate__WEBPACK_IMPORTED_MODULE_3__.default)(language)\r\n            fullObject = response.object\r\n            objectTranslated = response.objectLang\r\n\r\n            const sloganArr = objectTranslated.personal_information.slogan\r\n            typeWritter.setArrChanged(sloganArr)\r\n\r\n            projectSection(objectTranslated.projects)\r\n            ;(0,_intoDOM__WEBPACK_IMPORTED_MODULE_2__.loadMoreProjectsDOM)(objectTranslated)\r\n        }\r\n    }   \r\n})\r\n\r\n\r\nfunction projectSection (projects) {\r\n    ;(0,_intoDOM__WEBPACK_IMPORTED_MODULE_2__.singleProjectDOM)(projects, 3)\r\n\r\n    const $seachProject = document.querySelector('#searchProject')\r\n    .addEventListener('input', (e) => {\r\n        ;(0,_functions__WEBPACK_IMPORTED_MODULE_1__.findProjectInArr)(objectTranslated.projects, e.target.value.toLowerCase().trim())\r\n    })\r\n    \r\n}\r\n\n\n//# sourceURL=webpack://personal-portfolio/./src/js/index.js?");

/***/ }),

/***/ "./src/js/intoDOM.js":
/*!***************************!*\
  !*** ./src/js/intoDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"paragraphDOM\": () => (/* binding */ paragraphDOM),\n/* harmony export */   \"navbarDOM\": () => (/* binding */ navbarDOM),\n/* harmony export */   \"technologiesDOM\": () => (/* binding */ technologiesDOM),\n/* harmony export */   \"singleProjectDOM\": () => (/* binding */ singleProjectDOM),\n/* harmony export */   \"loadMoreProjectsDOM\": () => (/* binding */ loadMoreProjectsDOM)\n/* harmony export */ });\n/* harmony import */ var _src_assets_technologies_html_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/assets/technologies/html.svg */ \"./src/assets/technologies/html.svg\");\n/* harmony import */ var _src_assets_technologies_css_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/assets/technologies/css.svg */ \"./src/assets/technologies/css.svg\");\n/* harmony import */ var _src_assets_technologies_javascript_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/assets/technologies/javascript.svg */ \"./src/assets/technologies/javascript.svg\");\n/* harmony import */ var _src_assets_technologies_sass_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/assets/technologies/sass.svg */ \"./src/assets/technologies/sass.svg\");\n/* harmony import */ var _src_assets_technologies_json_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/assets/technologies/json.svg */ \"./src/assets/technologies/json.svg\");\n/* harmony import */ var _src_assets_technologies_babel_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/assets/technologies/babel.svg */ \"./src/assets/technologies/babel.svg\");\n/* harmony import */ var _src_assets_technologies_jest_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/assets/technologies/jest.svg */ \"./src/assets/technologies/jest.svg\");\n/* harmony import */ var _src_assets_technologies_cypress_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/assets/technologies/cypress.svg */ \"./src/assets/technologies/cypress.svg\");\n/* harmony import */ var _src_assets_technologies_gulp_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/assets/technologies/gulp.svg */ \"./src/assets/technologies/gulp.svg\");\n/* harmony import */ var _src_assets_technologies_pug_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/assets/technologies/pug.svg */ \"./src/assets/technologies/pug.svg\");\n/* harmony import */ var _src_assets_technologies_react_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/assets/technologies/react.svg */ \"./src/assets/technologies/react.svg\");\n/* harmony import */ var _src_assets_technologies_angular_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/assets/technologies/angular.svg */ \"./src/assets/technologies/angular.svg\");\n/* harmony import */ var _src_assets_technologies_typescript_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/assets/technologies/typescript.svg */ \"./src/assets/technologies/typescript.svg\");\n/* harmony import */ var _src_assets_technologies_nodejs_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/assets/technologies/nodejs.svg */ \"./src/assets/technologies/nodejs.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst iconImports = {\r\n    html: _src_assets_technologies_html_svg__WEBPACK_IMPORTED_MODULE_0__,\r\n    css: _src_assets_technologies_css_svg__WEBPACK_IMPORTED_MODULE_1__,\r\n    javascript: _src_assets_technologies_javascript_svg__WEBPACK_IMPORTED_MODULE_2__,\r\n    sass: _src_assets_technologies_sass_svg__WEBPACK_IMPORTED_MODULE_3__,\r\n    json: _src_assets_technologies_json_svg__WEBPACK_IMPORTED_MODULE_4__,\r\n    babel: _src_assets_technologies_babel_svg__WEBPACK_IMPORTED_MODULE_5__,\r\n    jest: _src_assets_technologies_jest_svg__WEBPACK_IMPORTED_MODULE_6__,\r\n    gulp: _src_assets_technologies_gulp_svg__WEBPACK_IMPORTED_MODULE_8__,\r\n    cypress: _src_assets_technologies_cypress_svg__WEBPACK_IMPORTED_MODULE_7__,\r\n    pug: _src_assets_technologies_pug_svg__WEBPACK_IMPORTED_MODULE_9__,\r\n    react: _src_assets_technologies_react_svg__WEBPACK_IMPORTED_MODULE_10__,\r\n    angular: _src_assets_technologies_angular_svg__WEBPACK_IMPORTED_MODULE_11__,\r\n    typescript: _src_assets_technologies_typescript_svg__WEBPACK_IMPORTED_MODULE_12__,\r\n    nodejs: _src_assets_technologies_nodejs_svg__WEBPACK_IMPORTED_MODULE_13__\r\n}\r\n\r\nfunction paragraphDOM (object) {\r\n    // Generar Párrafo por cado uno en el objecto\r\n\tconst paragraphsWrapper = document.querySelector('.info__content');\r\n\tparagraphsWrapper.innerHTML = '';\r\n\tfor (let i = 0; i < object.length; i++) {\r\n\t\tparagraphsWrapper.innerHTML += `\r\n            <p class=\"info__paragraph\">${object[i]}</p>\r\n        `;\r\n\t}\r\n}\r\n\r\nfunction navbarDOM (navContent, object='') {\r\n    // El id de los enlaces no debe variar, sino en inglés\r\n    const navbarENLinks = object.EN.navbar\r\n\r\n    const navbarWrapper = document.querySelector('.navigation__nav');\r\n    navbarWrapper.innerHTML = navContent\r\n    .map((link, index) => { \r\n        // Different behind to links that are no redirects to another page\r\n        let target  = '';\r\n        let href = navbarENLinks\r\n        if(link !== 'linkeding') {\r\n            href = '#' + navbarENLinks[index]\r\n        } else {\r\n            href = 'https://www.linkedin.com/in/lesthoward/'\r\n            target = 'target=\"__blank\"'\r\n        }\r\n\r\n    return` <a class=\"navigation__link\" href=\"${href}\" ${target}>\r\n            <span class=\"navigation__highlight\">0${index}.</span>\r\n            ${link}\r\n        </a> \r\n    `}).join('')\r\n}\r\n\r\n\r\nfunction technologiesDOM (technologies) {\r\n    const technologiesWrapper = document.querySelector('.technologies__wrapper');\r\n    technologiesWrapper.innerHTML = technologies\r\n    .map(tech => `\r\n        <div class=\"technologies__box\">\r\n            <div class=\"technologies__title\">${tech}</div>\r\n        </div>\r\n    `).join('')\r\n}\r\n\r\n\r\n\r\n\r\nfunction singleProjectDOM (projects, condicionalLength = 0) {\r\n    const projectsContainer = document.querySelector('.projects__grid');\r\n    projectsContainer.innerHTML = ''\r\n    // NO FUNCIONA POR EL FUNCIONAMIENTO DEL RETURN DEL MAP, ESTÁ POR INDEX. PARA SOLUCIONAR DEBE SER AL ARREGLO LA RESTRICCIÓN\r\n    // Order by rating number in project object\r\n        projects.sort((a, b) => {\r\n            !a['rating'] ? a['rating'] = 1 : null\r\n            !b['rating'] ? b['rating']= 1 : null\r\n\r\n            // Es importante que el a le reste a b \r\n            return b['rating'] - a['rating']\r\n        })\r\n        console.log(projects);\r\n\r\n    projectsContainer.innerHTML = projects\r\n    .map((singleProject, index) => {\r\n\r\n        \r\n        let {title, description, preview, code, tools} = singleProject\r\n        // Si el botón tiene un enlace de vista preview quiero mostrarlo, sino no hagas nada\r\n        let btnPreview = ''\r\n        if(preview) {\r\n            btnPreview = `<a class=\"project__btn\" id=\"preview\" href=\"${preview}\" target=\"_blank\">Preview</a>`\r\n        }\r\n\r\n        // Si no hay ruta entonces redirige a la página principal. Por aquello que esté mal\r\n        if(!code) {\r\n            code = ''\r\n        }\r\n\r\n        function getTechnologyIcon (toolArr) {\r\n            // Para equitar algún conflicto (todavía no traduzco)\r\n            if (!toolArr) return\r\n            // Dentro de este contenedor iran todo el HTML, solo se utiliza. No se muestra en el HTML\r\n            const iconWrapper = document.createElement('div');\r\n            // Ordenar los elementos del arreglo (mutable)\r\n            // toolArr.sort((a, b) => 5- 10)\r\n            // toolArr.sort()\r\n            toolArr.forEach((singleTool) => {\r\n                // Obtengo las referencias de las imagenes importadas dentro de los objectos\r\n                const avaibleIconsName = Object.keys(iconImports)\r\n                // Comprobar si existe dentro del objeto imports de las imágenes. Así funciona Webpack, es necesitario importar antes, si es desde javascript\r\n                const existingIcons = avaibleIconsName.includes(singleTool) > -1\r\n                if(existingIcons) {\r\n                    const iconName = singleTool\r\n                    // Encontrar el nombre dentro del objeto de importaciones\r\n                    const iconImage = iconImports[singleTool]\r\n                    iconWrapper.innerHTML += iconTemplate (iconName,iconImage)\r\n                } \r\n                \r\n                if(!existingIcons) {\r\n                    iconWrapper.innerHTML += `<span class=\"projects__noicon\">${singleTool}</span>`\r\n                }\r\n            })\r\n            return iconWrapper.innerHTML\r\n        }\r\n        \r\n        // Función para crear las imágenes desde afuera (en un principio iba realizarlo diferente, pero webpack transforma las imágenes por importación)\r\n        function iconTemplate (iconName,iconUrl, extension = 'svg') {\r\n            return `<div class=\"project__image\" data-name=\"${iconName}\">\r\n                        <img class=\"projects__icon\" src=\"${iconUrl}\" >\r\n                    </div>`\r\n        }\r\n\r\n        while(index < condicionalLength) {\r\n            return `\r\n            <div class=\"projects__box\">\r\n                <div class=\"projects__info\">\r\n                        <h4 class=\"projects__title\">${title}</h4>\r\n                        <!-- projects__title -->\r\n                        <p class=\"projects__description\">${description}</p>\r\n                        <!-- projects__description -->\r\n                    </div>\r\n                    <!-- projects__info -->\r\n                    <div class=\"projects__technologies\">\r\n                        ${getTechnologyIcon(singleProject.tools)}\r\n                    </div>\r\n                    <!-- projects__technologies -->\r\n                    <div class=\"projects__buttons\">\r\n                        ${btnPreview}\r\n                        <a class=\"project__btn\" id=\"code\" href=\"${code}\" target=\"_blank\">Code source</a>\r\n                    </div>\r\n                    <!-- projects__buttons -->\r\n                </div>\r\n              `\r\n        }\r\n        }).join('')\r\n\r\n\r\n}\r\n\r\nfunction loadMoreProjectsDOM (objectTranslated) {\r\n    let loadmore = 3\r\n    let contentLoaded;\r\n    document.querySelector('.loading__expandall .loading__quantiy')\r\n        .textContent = `(${objectTranslated.projects.length})`\r\n\r\n    document.querySelector('.loading__more .loading__quantiy')\r\n        .textContent = `(${loadmore})`\r\n\r\n    const $messageLoadedDOM = document.querySelector('.loading__complete'); \r\n    const scroll = document.querySelector('.scroll');\r\n    // Load only 3 items more\r\n    document.querySelector('.loading__more')\r\n    .addEventListener('click', (e) => {\r\n        loadmore += 3\r\n        \r\n        if(!contentLoaded) {\r\n            singleProjectDOM(objectTranslated.projects, loadmore)\r\n        } else {\r\n            $messageLoadedDOM.style.display = 'block'\r\n            setTimeout(function() {\r\n                $messageLoadedDOM.style.display = 'none'\r\n            }, 3000);\r\n        }\r\n        \r\n        if(loadmore > objectTranslated.projects.length){\r\n            contentLoaded = true\r\n        }\r\n        window.scroll(0, scroll.offsetTop - window.innerHeight +50)\r\n    })\r\n\r\n\r\n    // Expand All\r\n    document.querySelector('.loading__expandall')\r\n    .addEventListener('click', (e) => {\r\n        if(!contentLoaded) {\r\n            singleProjectDOM(objectTranslated.projects, objectTranslated.projects.length)\r\n        } else {\r\n            $messageLoadedDOM.style.display = 'block'\r\n            setTimeout(function() {\r\n                $messageLoadedDOM.style.display = 'none'\r\n            }, 3000);\r\n        }\r\n        window.scroll(0, scroll.offsetTop - window.innerHeight +50)\r\n        contentLoaded = true\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://personal-portfolio/./src/js/intoDOM.js?");

/***/ }),

/***/ "./src/js/translate.js":
/*!*****************************!*\
  !*** ./src/js/translate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/js/api.js\");\n/* harmony import */ var _intoDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intoDOM */ \"./src/js/intoDOM.js\");\n\r\n\r\n\r\nasync function changeLanguage(lang) {\r\n\tconst object = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getLanguageTexts)();\r\n\tconst objectLang = object[lang];\r\n\r\n\tconst { personal_information } = objectLang;\r\n\t// First Look in page\r\n\tconst sloganTitle = document.querySelector('.slogan__title');\r\n\tconst sloganArr = document.querySelector('.slogan__text');\r\n\tconst sloganProfession = document.querySelector('.slogan__profession');\r\n\tconst authorParagraph = document.querySelector('.firstlook__paragraph');\r\n\tsloganTitle.textContent = personal_information.slogan_title;\r\n\tsloganArr.textContent = '';\r\n\tsloganProfession.textContent = personal_information.profession;\r\n\tauthorParagraph.textContent = personal_information.description;\r\n\r\n\t// Setion Titles\r\n\tconst { sectionTitle } = objectLang;\r\n\tdocument.querySelector('.title__projects').textContent = sectionTitle[0];\r\n\tdocument.querySelector('.title__technologies').textContent =\r\n\t\tsectionTitle[1];\r\n\tdocument.querySelector('.title__info').textContent = sectionTitle[2];\r\n\r\n\t// Info Section\r\n\tconst { about } = objectLang;\r\n    (0,_intoDOM__WEBPACK_IMPORTED_MODULE_1__.paragraphDOM)(about)\r\n    ;(0,_intoDOM__WEBPACK_IMPORTED_MODULE_1__.navbarDOM)(objectLang.navbar, object)\r\n\r\n\r\n\r\n\t// Variety\r\n\t// ==== Loaders\r\n\tdocument.querySelector('.loading__more--text').innerText = objectLang.variety.loader[0]\r\n\tdocument.querySelector('.loading__expandall--text').textContent = objectLang.variety.loader[1]\r\n\tdocument.querySelector('.loading__fullprojects--text').textContent = objectLang.variety.loader[2]\r\n\tdocument.querySelector('.loading__complete').textContent = objectLang.variety.loader[3]\r\n\t// ==== Input search project\r\n\t// Loaded Message\r\n\r\n\r\n\r\n    return {object, objectLang}\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeLanguage);\r\n\n\n//# sourceURL=webpack://personal-portfolio/./src/js/translate.js?");

/***/ }),

/***/ "./src/assets/technologies/angular.svg":
/*!*********************************************!*\
  !*** ./src/assets/technologies/angular.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f9ef2acacb9c7dcc60c4.svg\";\n\n//# sourceURL=webpack://personal-portfolio/./src/assets/technologies/angular.svg?");

/***/ }),

/***/ "./src/assets/technologies/babel.svg":
/*!*******************************************!*\
  !*** ./src/assets/technologies/babel.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04044587886f7439f0ab.svg\";\n\n//# sourceURL=webpack://personal-portfolio/./src/assets/technologies/babel.svg?");

/***/ }),

/***/ "./src/assets/technologies/css.svg":
/*!*****************************************!*\
  !*** ./src/assets/technologies/css.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ec320225ef851ed26cf.svg\";\n\n//# sourceURL=webpack://personal-portfolio/./src/assets/technologies/css.svg?");

/***/ }),

/***/ "./src/assets/technologies/cypress.svg":
/*!*********************************************!*\
  !*** ./src/assets/technologies/cypress.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b5c9e0c857163b78edae.svg\";\n\n//# sourceURL=webpack://personal-portfolio/./src/assets/technologies/cypress.svg?");

/***/ }),

/***/ "./src/assets/technologies/gulp.svg":
/*!******************************************!*\
  !*** ./src/assets/technologies/gulp.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"adcef0860cfefc42fd53.svg\";\n\n//# sourceURL=webpack://personal-portfolio/./src/assets/technologies/gulp.svg?");

/***/ }),

/***/ "./src/assets/technologies/html.svg":
/*!******************************************!*\
  !*** ./src/assets/technologies/html.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c1bb84e022ca9d76984d.svg\";\n\n//# sourceURL=webpack://personal-portfolio/./src/assets/technologies/html.svg?");

/***/ }),

/***/ "./src/assets/technologies/javascript.svg":
/*!************************************************!*\
  !*** ./src/assets/technologies/javascript.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"081325c6f229605dce15.svg\";\n\n//# sourceURL=webpack://personal-portfolio/./src/assets/technologies/javascript.svg?");

/***/ }),

/***/ "./src/assets/technologies/jest.svg":
/*!******************************************!*\
  !*** ./src/assets/technologies/jest.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9af4e60c6fab328c50be.svg\";\n\n//# sourceURL=webpack://personal-portfolio/./src/assets/technologies/jest.svg?");

/***/ }),

/***/ "./src/assets/technologies/json.svg":
/*!******************************************!*\
  !*** ./src/assets/technologies/json.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e2ed66d44eef57e79647.svg\";\n\n//# sourceURL=webpack://personal-portfolio/./src/assets/technologies/json.svg?");

/***/ }),

/***/ "./src/assets/technologies/nodejs.svg":
/*!********************************************!*\
  !*** ./src/assets/technologies/nodejs.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cccdafa931eebdaea49f.svg\";\n\n//# sourceURL=webpack://personal-portfolio/./src/assets/technologies/nodejs.svg?");

/***/ }),

/***/ "./src/assets/technologies/pug.svg":
/*!*****************************************!*\
  !*** ./src/assets/technologies/pug.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c7d0e1b867988fd7a3a.svg\";\n\n//# sourceURL=webpack://personal-portfolio/./src/assets/technologies/pug.svg?");

/***/ }),

/***/ "./src/assets/technologies/react.svg":
/*!*******************************************!*\
  !*** ./src/assets/technologies/react.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"03efd7ced1ca43423bdc.svg\";\n\n//# sourceURL=webpack://personal-portfolio/./src/assets/technologies/react.svg?");

/***/ }),

/***/ "./src/assets/technologies/sass.svg":
/*!******************************************!*\
  !*** ./src/assets/technologies/sass.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d28477a11070f4744fb0.svg\";\n\n//# sourceURL=webpack://personal-portfolio/./src/assets/technologies/sass.svg?");

/***/ }),

/***/ "./src/assets/technologies/typescript.svg":
/*!************************************************!*\
  !*** ./src/assets/technologies/typescript.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f20748caf2dac55710dd.svg\";\n\n//# sourceURL=webpack://personal-portfolio/./src/assets/technologies/typescript.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "personal-portfolio:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpersonal_portfolio"] = self["webpackChunkpersonal_portfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;