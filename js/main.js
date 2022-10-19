

    const navBar = document.querySelector('.nav__desktop-shadow')


    function addShadow() {
			if (window.scrollY >= 226) {
				navBar.classList.add('shadow-bg');
			} else {
				navBar.classList.remove('shadow-bg');
			}
		}


        window.addEventListener('scroll', addShadow);





const navBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const footerYear = document.querySelector('.footer__year');
const allNavItems = document.querySelectorAll('.nav__link');


const handleNav = () => {
    navMobile.classList.toggle('nav-mobile--active');
    navBtn.classList.toggle('is-active');
    document.body.classList.toggle('sticky-body');




     allNavItems.forEach((item) => {
				item.addEventListener('click', () => {
					navMobile.classList.remove('nav-mobile--active');
                    navBtn.classList.remove('is-active');
                    document.body.classList.remove('sticky-body');
				});
			});

}

navBtn.addEventListener('click', handleNav);



const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();