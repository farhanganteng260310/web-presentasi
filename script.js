const slides = document.querySelectorAll(".slide");
const slideNumber = document.getElementById("slideNumber");

let currentSlide = 0;


// Menampilkan slide
function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = slides.length - 1;
    } else if (index < 0) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");

    slideNumber.textContent =
        `${currentSlide + 1} / ${slides.length}`;
}


// Slide berikutnya
function nextSlide() {

    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }

}


// Slide sebelumnya
function previousSlide() {

    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }

}


// Pergi ke slide tertentu
function goToSlide(index) {
    showSlide(index);
}


// Keyboard
document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        nextSlide();
    }

    if (event.key === "ArrowLeft") {
        previousSlide();
    }

    // Tombol Home kembali ke slide pertama
    if (event.key === "Home") {
        goToSlide(0);
    }

    // Tombol End menuju slide terakhir
    if (event.key === "End") {
        goToSlide(slides.length - 1);
    }

});


// Jalankan slide pertama
showSlide(0);