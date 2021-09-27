window.onscroll = () => {
    const header = document.querySelector('.page__header');
    const navigation = document.querySelector('.header__menu');
    const footerBoxes = document.querySelectorAll('.footer__box');

    const page = document.querySelector('#page').scrollHeight;
    let nesesaryScrollForFooter = page - 1100;

    if (window.scrollY >= nesesaryScrollForFooter) {
        footerBoxes.forEach(el => {
            el.classList.add('do__anim');
        });
    } else {
        footerBoxes.forEach(el => {
            el.classList.remove('do__anim');
        });
    }


    if (window.scrollY >= header.scrollHeight) {
        navigation.classList.add('fixed');
    } else {
        navigation.classList.remove('fixed');
    }

}

//MENU BURGER

const iconMenu = document.querySelectorAll('.menu__icon');
const page = document.querySelector('#page')

if (iconMenu) {
    const menuBody = document.querySelector('.header__menu');
    iconMenu.forEach(el => {
        el.addEventListener('click', (e) => {
            document.body.classList.toggle('_lock');
            el.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
    })

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

/* SCROLL HERO */
sr.reveal('.hero__title', { origin: 'top' })
sr.reveal('.hero__btn', { origin: 'bottom', delay: 200 })

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



