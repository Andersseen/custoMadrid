window.onscroll = () => {
    const header = document.querySelector('.page__header');

    const navigation = document.querySelector('.header__menu');

    const logo = document.querySelector('#logo');

    if (window.scrollY >= header.scrollHeight) {
        navigation.classList.add('fixed');
        logo.classList.add('canOpen');
    } else {
        navigation.classList.remove('fixed');
        logo.classList.remove('canOpen');
    }

}


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})


/*SCROLL HOME*/
sr.reveal('.header__title', { origin: 'bottom' })
sr.reveal('.header__social', { origin: 'bottom', delay: 200 })
sr.reveal('.header__subtitle', { origin: 'bottom', delay: 400 })

/*SCROLL BLOG*/
sr.reveal('.blog__img', { origin: 'right' })
sr.reveal('.blog__wrapper', { origin: 'left' })

/*SCROLL GALLERY*/
sr.reveal('.box__1', { origin: 'right' })
sr.reveal('.box__2', {})
sr.reveal('.box__3', { origin: 'left' })
sr.reveal('.box__4', { origin: 'right' })
sr.reveal('.box__5', { origin: 'bottom' })
sr.reveal('.box__6', { origin: 'left' })

/*SCROLL ABOUT*/
sr.reveal('.about__img', { origin: 'left' })
sr.reveal('.about__wrapper', { origin: 'right' })

/*SCROLL CONTACT*/
sr.reveal('.contact__title', {})



