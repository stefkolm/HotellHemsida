document.addEventListener("DOMContentLoaded", function() {
    let isOpen = false; // Variable to store the state

    const button = document.getElementById("nav-button");
    const navbar = document.getElementById("mobile-nav");

    function toggleOpenClose() {
        if (isOpen) {
            close();
        } else {
            open();
        }
        isOpen = !isOpen; // Toggle the state
    }

    function open() {
        navbar.classList.add("open");
    }

    function close() {
        navbar.classList.remove("open");
    }

    button.addEventListener("click", toggleOpenClose);
});