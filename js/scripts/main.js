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