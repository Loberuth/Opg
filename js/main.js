const hambMenu = document.getElementById('hambMenu');
const mobileMenu = document.getElementById('mobile-menu');

function menuSetting(){
    hambMenu.classList.toggle('open');
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
}
hambMenu.addEventListener('click', menuSetting);