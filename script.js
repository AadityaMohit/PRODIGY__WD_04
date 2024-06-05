const developerTypes = ["Web Developer", "Web Designer","DJANGO","MERN"];
let index = 0;

function changeDeveloperType() {
    document.getElementById("developer-type").textContent = developerTypes[index];
    index = (index + 1) % developerTypes.length;
}

// Initial call
changeDeveloperType();

// Animation interval
setInterval(changeDeveloperType, 1000);
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});