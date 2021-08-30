import gsap from "gsap"

function animatingDOM () {
    
    gsap.from('.header__image', {
        opacity: 0, 
        y: -50, 
        duration: 1.5,
        stagger: .1, 
        ease: 'bounce'
    })
    // SLOGAN
    gsap.from('.slogan__title', {
        opacity: 0, 
        y: -100, 
        duration: .5,
        ease: 'bounce'
    })


    // FIRST LOOK
    gsap.from('.firstlook__name', {
        opacity: 0, 
        x: -100, 
        duration: 1

    })
    gsap.from('.firstlook__paragraph', {
        opacity: 0, 
        x: -100, 
        duration: 2

    })

    // NAVIGATION
    gsap.from('.navigation__link', {
        opacity: 0, 
        x: 100, 
        duration: 1,
        stagger: 0.1
    })

    ScrollReveal().reveal('section', { 
        delay: 200, 
        distance: '-40px',
        origin: 'right',
        ease: 'ease-in-out'
     })
    
}

export default animatingDOM