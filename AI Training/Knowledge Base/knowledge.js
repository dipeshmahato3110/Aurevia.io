// Add event listeners for sidebar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        // Remove 'active' class from all nav-links
        document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
        
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

// Chatbot
document.addEventListener("DOMContentLoaded", () => {
    const openChatbotBtn = document.getElementById("openChatbot");
    const closeChatbotBtn = document.getElementById("closeChatbot");
    const chatbotModal = document.getElementById("chatbotModal");
    const contentContainer = document.querySelector(".content-container");

    // Open the chatbot modal and add blur effect
    openChatbotBtn.addEventListener("click", () => {
        chatbotModal.classList.add("active");
        contentContainer.classList.add("blurred");
    });

    // Close the chatbot modal and remove blur effect
    closeChatbotBtn.addEventListener("click", () => {
        chatbotModal.classList.remove("active");
        contentContainer.classList.remove("blurred");
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === chatbotModal) {
            chatbotModal.classList.remove("active");
            contentContainer.classList.remove("blurred");
        }
    });
});

