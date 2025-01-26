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

// Add new source module
const addSourceBtn = document.getElementById('add-source-btn');
const modalOverlay = document.getElementById('modal-overlay');
const closeBtn = document.getElementById('close-btn');
const cancelBtn = document.getElementById('cancel-btn');
const content = document.querySelector('body'); // Main content container

// Open modal when clicking "Add New Source"
addSourceBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('d-none');
  content.classList.add('blur-active'); // Add blur effect
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
  modalOverlay.classList.add('d-none');
  content.classList.remove('blur-active'); // Remove blur effect
});

// Close modal when clicking the cancel button
cancelBtn.addEventListener('click', () => {
  modalOverlay.classList.add('d-none');
  content.classList.remove('blur-active'); // Remove blur effect
});

// Optional: Close modal when clicking outside the modal container
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add('d-none');
    content.classList.remove('blur-active'); // Remove blur effect
  }
});

// Add functionality for the "Add source" button
document.getElementById('addSourceButton').addEventListener('click', function () {
  const selectedOption = document.querySelector('input[name="sourceOption"]:checked');
  if (selectedOption) {
      alert('Source added');
  } else {
      alert('Please select a source option!');
  }
});