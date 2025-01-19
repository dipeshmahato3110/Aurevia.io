document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from redirecting

        const companyName = document.getElementById("companyName").value.trim();
        const industry = document.getElementById("industry").value.trim();
        const contactNumber = document.getElementById("contactNumber").value.trim();
        const tags = document.getElementById("tags").value.trim();
        const email = document.getElementById("email").value.trim();
        const role = document.getElementById("role").value.trim();

        if (!companyName || !industry || !contactNumber || !tags || !email || !role) {
            alert("Please fill in all the required fields before proceeding.");
            return;
        }

        // If all fields are filled, proceed to the next step (e.g., redirect)
        window.location.href = "/Daskboard/daskboard.html";
    });
});