 // Toggle menu visibility when the menu bar icon is clicked
document.getElementById('menu-bar').addEventListener('click', function(event) {
    event.stopPropagation();
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

// Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block' && !menu.contains(event.target) && !event.target.closest('#menu-bar')) {
        menu.style.display = 'none';
    }
});

// Scroll to the specific state content when the menu link is clicked
document.querySelectorAll('.menu a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        var stateId = event.target.getAttribute('href').substring(1);

        // Hide all state content
        document.querySelectorAll('.state-content').forEach(function(content) {
            content.style.display = 'none';
        });

        // Show the clicked state content
        document.getElementById(stateId).style.display = 'block';

        // Hide the menu after selection
        document.getElementById('menu').style.display = 'none';
    });
});

// Automatically hide the menu after a short delay if not interacted with
var hideMenuTimeout;
document.getElementById('menu-bar').addEventListener('mouseover', function() {
    clearTimeout(hideMenuTimeout); // Clear any previous timeout to hide
});

document.getElementById('menu').addEventListener('mouseover', function() {
    clearTimeout(hideMenuTimeout); // Clear any previous timeout to hide
});

document.getElementById('menu').addEventListener('mouseleave', function() {
    hideMenuTimeout = setTimeout(function() {
        document.getElementById('menu').style.display = 'none';
    }, 1000); // Adjust delay as needed
});
