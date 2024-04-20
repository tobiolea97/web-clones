document.querySelector('.close-sidebar').addEventListener('click', function() {
    document.querySelector('.sidebar-section').style.display = 'none';
});

document.querySelector('.menu-button').addEventListener('click', function() {
    document.querySelector('.sidebar-section').style.display = 'block';
});


document.querySelector('#submenu-1-btn').addEventListener('click', function() {
    document.querySelector('#submenu-1').style.display = 'block';
});

document.querySelector('#close-submenu-1').addEventListener('click', function() {
    document.querySelector('#submenu-1').style.display = 'none';
});


