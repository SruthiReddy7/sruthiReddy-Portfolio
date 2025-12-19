document.addEventListener("DOMContentLoaded", () => {
    // Typed.js
    new Typed("#element", {
        strings: ["Full-Stack Developer", "Tech Enthusiast", "Future Innovator"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Hamburger Toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Certificate Modal
    const modal = document.getElementById("imageModal");
    const certificateImage = document.getElementById("certificateImage");
    const viewButtons = document.querySelectorAll(".view-certificate-btn");
    const closeModalBtn = document.querySelector(".close-modal");

    const closeModal = () => {
        modal.style.display = "none";
        certificateImage.src = "";
        document.body.style.overflow = "auto";
    };

    viewButtons.forEach(button => {
        button.addEventListener("click", () => {
            certificateImage.src = button.dataset.image;
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    });

    closeModalBtn.addEventListener("click", closeModal);
});