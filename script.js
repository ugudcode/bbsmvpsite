document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    if (logo && sidebar) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function() {
            sidebar.classList.toggle('sidebar-hidden');
            if (sidebar.classList.contains('sidebar-hidden')) {
                body.classList.remove('sidebar-visible');
            } else {
                body.classList.add('sidebar-visible');
            }
        });
    }
    // Set initial state on load
    if (!sidebar.classList.contains('sidebar-hidden')) {
        body.classList.add('sidebar-visible');
    }
});
