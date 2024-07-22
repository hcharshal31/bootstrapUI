document.addEventListener("DOMContentLoaded", () => {
    const backToTop = document.getElementById('backToTop');

    function checkHeight() {
        if (window.scrollY > 100) {
            backToTop.style.display = "block"; // Use "block" instead of "flex" for a button
        } else {
            backToTop.style.display = "none";
        }
    }

    window.addEventListener("scroll", checkHeight);

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: adds a smooth scroll effect
        });
    });

    // Initial check in case the page is already scrolled
    checkHeight();
});
