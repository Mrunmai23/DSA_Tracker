document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the saved checkbox state from local storage (if any)
    const checkboxStates = JSON.parse(localStorage.getItem("checkboxStates")) || {};
  
    // Set the initial checkbox states based on the saved data
    for (let i = 1; i <= 10; i++) {
      const checkbox = document.getElementById(`ce${i}`);
      checkbox.checked = checkboxStates[`ce${i}`] || false;
      // Add an event listener to each checkbox to update the local storage when its state changes
      checkbox.addEventListener("change", function() {
        checkboxStates[`ce${i}`] = this.checked;
        localStorage.setItem("checkboxStates", JSON.stringify(checkboxStates));
      });
    }
  });
  // Get references to all checkboxes and the count display element
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const countDisplay = document.getElementById('count2');
  
  // Function to update the count and store it locally
  function updateCount() {
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const count = checkedCheckboxes.length;
    countDisplay.textContent = count;
  
    // Store the count in the local storage
    localStorage.setItem('checkboxCount2', count);
  }
  
  // Add event listeners to each checkbox to detect changes
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateCount);
  });
  
  // Function to get the count from local storage on page load
  function getCountFromLocalStorage() {
    const count = localStorage.getItem('checkboxCount2');
    if (count !== null) {
      countDisplay.textContent = count;
    }
  }
  
  // Initial count update on page load from local storage
  getCountFromLocalStorage();

  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const tableData = document.getElementById('table');
    const tableRows = tableData.getElementsByTagName('tr');

    searchInput.addEventListener('keyup', function() {
        const searchTerm = searchInput.value.toLowerCase();

        for (let i = 0; i < tableRows.length; i++) {
            const rowData = tableRows[i].textContent.toLowerCase();
            const display = rowData.indexOf(searchTerm) > -1 ? 'table-row' : 'none';
            tableRows[i].style.display = display;
        }
    });
});
