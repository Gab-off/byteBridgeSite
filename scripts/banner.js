document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const track = document.querySelector('.carousel-track');
    let current = 0;

    function goToSlide(n) {
        track.style.transform = `translateX(-${n * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === n));
        current = n;
    }
    dots.forEach((dot, i) => dot.onclick = () => goToSlide(i));

    setInterval(() => goToSlide((current + 1) % slides.length), 4000);

    goToSlide(0);
});
