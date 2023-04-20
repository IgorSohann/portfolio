const menuBtn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu__list')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
  });
  
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
  });

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
});

// выбираем все ссылки на странице
const links = document.querySelectorAll('a[href^="#"]');

// добавляем обработчик события на каждую ссылку
links.forEach(link => {
  link.addEventListener('click', e => {
    // отменяем стандартное поведение ссылки
    e.preventDefault();

    // получаем якорь, на который ссылается ссылка
    const anchor = document.querySelector(link.getAttribute('href'));

    // проверяем, что якорь существует
    if (anchor) {
      // получаем координаты якоря
      const coords = anchor.getBoundingClientRect();

      // плавно перемещаем страницу к якорю
      window.scrollTo({
        top: coords.top,
        left: coords.left,
        behavior: 'smooth'
      });
    }
  });
});