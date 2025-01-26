// Add functionality for the "Add source" button
document.getElementById('addSourceButton').addEventListener('click', function () {
    const selectedOption = document.querySelector('input[name="sourceOption"]:checked');
    if (selectedOption) {
        alert('Source added');
    } else {
        alert('Please select a source option!');
    }
});

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

    // Add source button action
    // document.getElementById('addSourceButton').addEventListener('click', function () {
    //     if (singlePageRadio.checked) {
    //         const url = document.getElementById('singlePageURL').value;
    //         if (url) {
    //             alert(`Single Page Website URL added: ${url}`);
    //         } else {
    //             alert('Please provide a valid URL.');
    //         }
    //     } else {
    //         alert('Other source selected.');
    //     }
    // });
});

// Text
// Add functionality to toggle input fields based on user selection
document.addEventListener('DOMContentLoaded', function () {
    const customTextRadio = document.getElementById('customText');
    const customTextInput = document.getElementById('customTextInput');

    // Show/Hide inputs dynamically
    const radioButtons = document.querySelectorAll('input[name="sourceOption"]');
    radioButtons.forEach((radio) => {
        radio.addEventListener('change', function () {
            if (singlePageRadio.checked) {
                singlePageInput.classList.remove('d-none');
                customTextInput.classList.add('d-none');
            } else if (customTextRadio.checked) {
                customTextInput.classList.remove('d-none');
                singlePageInput.classList.add('d-none');
            } else {
                singlePageInput.classList.add('d-none');
                customTextInput.classList.add('d-none');
            }
        });
    });

    // Add source button action
    document.getElementById('addSourceButton').addEventListener('click', function () {
        if (singlePageRadio.checked) {
            const url = document.getElementById('singlePageURL').value;
            if (url) {
                alert(`Single Page Website URL added: ${url}`);
            } else {
                alert('Please provide a valid URL.');
            }
        } else if (customTextRadio.checked) {
            const customText = document.getElementById('customTextBox').value;
            if (customText) {
                alert(`Custom Text added: ${customText}`);
            } else {
                alert('Please provide custom text.');
            }
        } else {
            alert('No source selected.');
        }
    });
});
