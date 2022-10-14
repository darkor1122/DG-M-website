const navBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const footerYear = document.querySelector('.footer__year');


const handleNav = () => {
    navMobile.classList.toggle('nav-mobile--active');
    navBtn.classList.toggle('is-active');
    document.body.classList.toggle('sticky-body');
}

navBtn.addEventListener('click', handleNav);



const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();