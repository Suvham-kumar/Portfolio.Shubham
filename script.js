document.addEventListener("DOMContentLoaded", function () {
    
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Form Validation
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("formMessage");

        if (name === "" || email === "") {
            message.textContent = "All fields are required!";
            message.style.color = "red";
        } else {
            message.textContent = "Message sent successfully!";
            message.style.color = "green";
            this.reset();
        }
    });
});
