document.addEventListener("DOMContentLoaded", function() {
  // Retrieve the saved checkbox state from local storage (if any)
  const checkboxStates = JSON.parse(localStorage.getItem("checkboxStates")) || {};

  // Set the initial checkbox states based on the saved data
  for (let i = 1; i <= 14; i++) {
    const checkbox = document.getElementById(`checkbox${i}`);
    checkbox.checked = checkboxStates[`checkbox${i}`] || false;
    // Add an event listener to each checkbox to update the local storage when its state changes
    checkbox.addEventListener("change", function() {
      checkboxStates[`checkbox${i}`] = this.checked;
      localStorage.setItem("checkboxStates", JSON.stringify(checkboxStates));
    });
  }
});
// Get references to all checkboxes and the count display element
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const countDisplay = document.getElementById('count');

// Function to update the count and store it locally
function updateCount() {
  const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const count = checkedCheckboxes.length;
  countDisplay.textContent = count;

  // Store the count in the local storage
  localStorage.setItem('checkboxCount', count);
}

// Add event listeners to each checkbox to detect changes
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateCount);
});

// Function to get the count from local storage on page load
function getCountFromLocalStorage() {
  const count = localStorage.getItem('checkboxCount');
  if (count !== null) {
    countDisplay.textContent = count;
  }
}

// Initial count update on page load from local storage
getCountFromLocalStorage();
