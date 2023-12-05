// copy-text.js

document.addEventListener('DOMContentLoaded', function () {
  // Find all elements with the class 'copy-button'
  const copyButtons = document.querySelectorAll('.copy-button');

  // Attach a click event listener to each copy button
  copyButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Get the text to copy from the data-clipboard-text attribute
      const textToCopy = button.getAttribute('data-clipboard-text');

      // Create a temporary input element
      const tempInput = document.createElement('input');

      // Set its value to the text to copy
      tempInput.value = textToCopy;

      // Append the input element to the document
      document.body.appendChild(tempInput);

      // Select the text in the input element
      tempInput.select();
      tempInput.setSelectionRange(0, 99999); /* For mobile devices */

      // Copy the text to the clipboard
      document.execCommand('copy');

      // Remove the temporary input element
      document.body.removeChild(tempInput);
    });
  });
});
