
// Retrieve the checkbox state from local storage
const checkbox = document.getElementById('myCheckbox');
const isChecked = localStorage.getItem('checkboxState') === 'true';

// Set the initial state
checkbox.checked = isChecked;

// Add an event listener to update local storage when the checkbox is changed
checkbox.addEventListener('change', () => {
    localStorage.setItem('checkboxState', checkbox.checked);
});
