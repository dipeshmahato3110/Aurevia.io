// Add new source module
const addSourceBtn = document.getElementById('add-source-btn');
const modalOverlay = document.getElementById('modal-overlay');
const closeBtn = document.getElementById('close-btn');
const cancelBtn = document.getElementById('cancel-btn');
const content = document.querySelector('body'); // Main content container

// Open modal when clicking "Creat"
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
      alert('Save');
  } 
});

