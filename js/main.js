// ===== Navbar Active Link =====
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split("/").pop(); // e.g., "index.html"

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === "" && href === "index.html")) {
            link.classList.add('active');
        }
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');

        // Disable scrolling when menu is open
        if (navLinks.classList.contains('show')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
});
