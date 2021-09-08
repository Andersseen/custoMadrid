window.onscroll = () => {
    const header = document.querySelector('.page__header');

    const navigation = document.querySelector('.header__menu');

    const logo = document.querySelector('.image__logo');

    let scrollNesesary = header.scrollHeight - navigation.scrollHeight;

    if (window.scrollY >= header.scrollHeight) {
        navigation.classList.add('fixed');
        logo.classList.add('canOpen');
    } else {
        navigation.classList.remove('fixed');
        logo.classList.remove('canOpen');
    }

}

