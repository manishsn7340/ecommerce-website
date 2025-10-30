document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById("myCarousel");
    const items = carousel.querySelectorAll(".carousel-item");
    const prevBtn = carousel.querySelector(".carousel-control-prev");
    const nextBtn = carousel.querySelector(".carousel-control-next");

    let currentIndex = 0; // currently visible slide
    const totalItems = items.length;

    // Helper: show specific slide
    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.remove("active");
            item.style.opacity = "0";
            item.style.zIndex = "0";
        });

        const activeItem = items[index];
        activeItem.classList.add("active");
        activeItem.style.opacity = "1";
        activeItem.style.zIndex = "1";
    }

    // Next Slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        showSlide(currentIndex);
    }

    // Previous Slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showSlide(currentIndex);
    }

    // Event Listeners for Buttons
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // Optional: Auto-slide every 3 seconds
    let autoSlide = setInterval(nextSlide, 3000);

    // Pause when mouse enters carousel
    carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));

    // Resume when mouse leaves carousel
    carousel.addEventListener("mouseleave", () => {
        autoSlide = setInterval(nextSlide, 3000);
    });

    // Initialize first slide
    showSlide(currentIndex);
});


const tabs = document.querySelectorAll('.tab');
const panes = document.querySelectorAll('.tab-pane');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});