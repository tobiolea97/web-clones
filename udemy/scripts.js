document.querySelector('.close-sidebar').addEventListener('click', function() {
    document.querySelector('.sidebar-section').style.display = 'none';
});

document.querySelector('.menu-button').addEventListener('click', function() {
    document.querySelector('.sidebar-section').style.display = 'block';
});
