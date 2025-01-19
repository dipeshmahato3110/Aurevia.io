// Redirect function
function redirectTo(page) {
    window.location.href = page;
}

// Close popup
function closePopup() {
    document.getElementById("popup-modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");

    // Redirect to login page
    loginBtn.addEventListener("click", function () {
        window.location.href = "/login/login.html";
    });

    // Redirect to signup page
    signupBtn.addEventListener("click", function () {
        window.location.href = "signup.html";
    });
});




// Redirect to OTP page after email submission
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var email = document.getElementById('email').value;

            if (email) {
                window.location.href = `otp.html?email=${encodeURIComponent(email)}`;
            }
        });
    }

    // Show email on OTP page
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    if (document.getElementById("user-email")) {
        document.getElementById("user-email").innerText = email || "your email";
    }
});

// OTP Verification
function verifyOTP() {
    const enteredOTP = 
        document.getElementById("otp1").value +
        document.getElementById("otp2").value +
        document.getElementById("otp3").value +
        document.getElementById("otp4").value;

    const defaultOTP = "1234";

    if (enteredOTP === defaultOTP) {
        window.location.href = "pricing.html";
    } else {
        alert("Invalid OTP. Please try again.");
    }
}
