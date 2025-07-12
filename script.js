document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const sidebar = document.querySelector('.sidebar');
    if (logo && sidebar) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function() {
            sidebar.classList.toggle('sidebar-hidden');
        });
    }
});
