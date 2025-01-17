document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (name && email && password) {
        // Redirect to OTP page
        window.location.href = `otp.html?email=${encodeURIComponent(email)}`;
    } else {
        alert("Please fill in all fields.");
    }
});
