    // When the animation finishes, redirect to a different page
    document.querySelector('.crawl').addEventListener('animationend', function() {
        window.location.href = 'funPage.html'; // Replace 'your-page-url.html' with the URL of the page you want to redirect to
    });