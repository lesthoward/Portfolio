function navEventClick() {
    const navigationToggle = document.querySelector('.navigation__togle');
    const navigationWrapper = document.querySelector('.navigation');
    const navigationLinks = document.querySelector('.navigation__nav');
    // Cuando se presiona un enlace quitar fomatear los enlentos de la navegación
    navigationLinks.addEventListener('click', () => {
        event.target.classList.toggle('navigation__togle--open')
        navigationWrapper.classList.toggle('navigation--open')
    })

    // Evento de click para abrir el menú
    navigationToggle.addEventListener('click', (event) => {
        event.target.classList.toggle('navigation__togle--open')
        navigationWrapper.classList.toggle('navigation--open')
    })
}


export {
    navEventClick
}