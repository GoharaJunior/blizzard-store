var slide_thumbnail = new Swiper(".slide-thumbnail", {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20,
    watchSlidesProgress: true
});

var slide_hero = new Swiper(".slide-principal", {
    effect: 'fade',
    loop: true,
    thumbs: {
        swiper: slide_thumbnail,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    }
});

// Tabs
const allFilters = document.querySelectorAll('.js-nav-games li a');
const tabPane = document.querySelectorAll('.tab-pane-games');

allFilters.forEach((filter, index) => {
    filter.addEventListener('click', (event) => {
        event.preventDefault();
        
        allFilters.forEach(item => {
            item.classList.remove('active');
        })

        tabPane.forEach(tab => {
            tab.classList.remove('active');
        })

        tabPane[index].classList.add('active');
        filter.classList.add('active');
    })
})

// Modal
const btnOpenModal = document.querySelector('.js-open-modal');
const btnCloseModal = document.querySelector('.js-close');
const btnCloseOverlay = document.querySelector('.js-overlay');

btnOpenModal.addEventListener('click', (event) => {
    event.preventDefault();

    let tagHtml = document.documentElement;
    tagHtml.classList.add('show-modal');
})

btnCloseModal.addEventListener('click', () => {
    let tagHtml = document.documentElement;

    tagHtml.classList.remove('show-modal');
})

btnCloseOverlay.addEventListener('click', () => {
    let tagHtml = document.documentElement;

    tagHtml.classList.remove('show-modal');
})

// Dropdowns
const btnMenu = document.querySelectorAll('.js-btn-menu');
const menuSite = document.querySelectorAll('.js-menu');

btnMenu.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        menuSite.forEach(itemMenu => {
            itemMenu.classList.remove('active');
            itemMenu.addEventListener('mouseleave', () => {
                itemMenu.classList.remove('active');
                btnMenu.forEach(itemBtn => {
                    itemBtn.classList.remove('active');
                })
            })
        })

        btnMenu.forEach(itemBtn => {
            itemBtn.classList.remove('active');
        })

        btn.classList.add('active');
        menuSite[index].classList.add('active');
    })
})