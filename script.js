// script.js

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    // Toggle the sidebar expansion on desktop only
    if (window.innerWidth > 768) {
        sidebar.classList.toggle('expanded');
    }
}

// Remove unnecessary mobile navigation JavaScript
// (No longer needed since the sidebar is hidden on mobile)
