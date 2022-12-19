const menuBtn = document.querySelector('.menu-btn');

const openMenu = () => {
    const sideNav = document.querySelector('nav');
    sideNav.classList.toggle('open');
    menuBtn.classList.toggle('open');
}

menuBtn.addEventListener('click', openMenu);