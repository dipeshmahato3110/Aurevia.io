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

// Single page
// Add functionality to toggle the single page input field
document.addEventListener('DOMContentLoaded', function () {
    const singlePageRadio = document.getElementById('singlePage');
    const singlePageInput = document.getElementById('singlePageInput');

    singlePageRadio.addEventListener('change', function () {
        if (this.checked) {
            singlePageInput.classList.remove('d-none');
        }
    });

    // Ensure the input is hidden when selecting other options
    const otherRadios = document.querySelectorAll('input[name="sourceOption"]');
    otherRadios.forEach((radio) => {
        radio.addEventListener('change', function () {
            if (!singlePageRadio.checked) {
                singlePageInput.classList.add('d-none');
            }
        });
    });
});

// Multi page
// Add functionality to toggle the multi page input field
document.addEventListener('DOMContentLoaded', function () {
    const multiPageRadio = document.getElementById('multiPage');
    const multiPageInput = document.getElementById('multiPageInput');

    multiPageRadio.addEventListener('change', function () {
        if (this.checked) {
            multiPageInput.classList.remove('d-none');
        }
    });

    // Ensure the input is hidden when selecting other options
    const otherRadios = document.querySelectorAll('input[name="sourceOption"]');
    otherRadios.forEach((radio) => {
        radio.addEventListener('change', function () {
            if (!multiPageRadio.checked) {
                multiPageInput.classList.add('d-none');
            }
        });
    });
});

// Custom Text
// Add functionality to toggle the custom text input field
document.addEventListener('DOMContentLoaded', function () {
  const customTextRadio = document.getElementById('customText');
  const customTextInput = document.getElementById('customTextInput');

  customTextRadio.addEventListener('change', function () {
      if (this.checked) {
          customTextInput.classList.remove('d-none');
      }
  });

  // Ensure the input is hidden when selecting other options
  const otherRadios = document.querySelectorAll('input[name="sourceOption"]');
  otherRadios.forEach((radio) => {
      radio.addEventListener('change', function () {
          if (!customTextRadio.checked) {
              customTextInput.classList.add('d-none');
          }
      });
  });
});
