document.addEventListener("DOMContentLoaded", function() {


    const currentPath = window.location.pathname; // Get the Path from url
    const directory = currentPath.split('/')[2]; // Get the current directory

    let navbarPath = './navbar.html'; // set default path


    if (directory === 'blogs') {
        navbarPath = '../navbar.html';

    }else if (directory === 'projects'){
        navbarPath = '../../navbar.html';
    }else if (directory === 'pages'){
        navbarPath = '../../navbar.html';
    }

    // Displays navbar if id is navbar-container
    fetch(navbarPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading the navbar:', error));

});


document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    
    // Determine directory level
    const level = pathParts.length;

    // Adjust the path based on directory depth
    const stylePath = '../'.repeat(level - 1) + 'assets/style.css';
    const scriptPath = '../'.repeat(level - 1) + 'script.js';


    // Dynamically create and insert link and script elements
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = stylePath;
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = scriptPath;
    document.body.appendChild(script);



   
});
document.addEventListener("DOMContentLoaded", function() {
    // Function to determine the base URL based on the current path
    function getBaseUrl() {
        const currentPath = window.location.pathname;
        const pathParts = currentPath.split('/');
        const level = pathParts.length - 1; // Number of directories up
        return '../'.repeat(level); // Going up the directory levels
    }

    // Function to update href attributes of navbar links based on class
    function updateNavbarLinks() {
        const baseUrl = getBaseUrl();

        // Map class names to their new paths
        const links = {
            'home-link': 'index.html',
            'project-link': 'projects.html',
            'blog-link': 'blogs.html',
            'writeup-link': 'writeups.html',
            'resume-link': 'resume.html'
        };

        for (const [className, newPath] of Object.entries(links)) {
            // Select all elements with the class
            const elements = document.querySelectorAll(`.${className}`);
            elements.forEach(element => {
                // Update the href attribute
                element.href = `${baseUrl}${newPath}`;
                console.log(element.href);
                console.log(`Updated ${className} to ${element.href}`);
            });
        }
    }

    // Update the navbar links on page load
    updateNavbarLinks();
});
