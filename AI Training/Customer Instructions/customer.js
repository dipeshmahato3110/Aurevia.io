// Add event listeners for sidebar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        // Remove 'active' class from all nav-links
        document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
        
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});
