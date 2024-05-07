// Add class 'active' to the clicked application for highlighting
document.addEventListener('DOMContentLoaded', function () {
    const applications = document.querySelectorAll('.application');
    applications.forEach(application => {
        application.addEventListener('click', () => {
            // Remove 'active' class from all applications
            applications.forEach(app => app.classList.remove('active'));

            // Add 'active' class to the clicked application
            application.classList.add('active');
        });
    });
});
