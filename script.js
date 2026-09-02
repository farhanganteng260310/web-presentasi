// ========================================
// DATA SLIDE
// ========================================

const slides = document.querySelectorAll(".slide");
const slideNumber = document.getElementById("slideNumber");

let currentSlide = 0;


// ========================================
// MENAMPILKAN SLIDE
// ========================================

function showSlide(index) {

    // Jika melewati slide terakhir
    if (index >= slides.length) {
        currentSlide = slides.length - 1;
    }

    // Jika kembali sebelum slide pertama
    else if (index < 0) {
        currentSlide = 0;
    }

    else {
        currentSlide = index;
    }


    // Menonaktifkan semua slide
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });


    // Mengaktifkan slide yang dipilih
    slides[currentSlide].classList.add("active");


    // Mengubah nomor slide
    slideNumber.textContent =
        `${currentSlide + 1} / ${slides.length}`;
}


// ========================================
// SLIDE BERIKUTNYA
// ========================================

function nextSlide() {

    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }

}


// ========================================
// SLIDE SEBELUMNYA
// ========================================

function previousSlide() {

    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }

}


// ========================================
// LANGSUNG KE SLIDE TERTENTU
// ========================================

function goToSlide(index) {
    showSlide(index);
}


// ========================================
// KEYBOARD NAVIGATION
// ========================================

document.addEventListener("keydown", function(event) {

    // Tombol panah kanan
    if (event.key === "ArrowRight") {
        nextSlide();
    }

    // Tombol panah kiri
    if (event.key === "ArrowLeft") {
        previousSlide();
    }

});


// ========================================
// INISIALISASI
// ========================================

showSlide(0);