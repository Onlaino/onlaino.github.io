const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

close.addEventListener('click', () => {
	menu.classList.remove('active');
});

const countersPercent = document.querySelectorAll('.skills__percent-item-percent');
const linePercent = document.querySelectorAll('.skills__percent-item_parent span');

countersPercent.forEach((item, i) => {
	linePercent[i].style.width = item.innerHTML;
});



