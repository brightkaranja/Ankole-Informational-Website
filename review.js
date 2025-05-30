const slides = document.querySelectorAll('.review_slide');
let currentIndex = 0;

function showSlide(index){
    slides.forEach((slide,i) => {
        slide.classList.toggle('active',i === index);
    });
}

document.getElementById('prev').addEventListener('click',() => {
    currentIndex = (currentIndex -1 + slides.length) %  slides.length;
    showSlide(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex +1 )% slides.length;
    showSlide(currentIndex);
})

showSlide(currentIndex);