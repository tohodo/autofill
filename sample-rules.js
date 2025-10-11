// Click `<button type="submit">` if it exists
document.querySelector('[type="submit"]')?.click();

/* ========================================================================== */

// Update value of `<input name="fullname">`
const fullName = document.querySelector('[name="fullname"]');
if (fullName) fullName.value = 'Bob Smith';

/* ========================================================================== */

// Check `<input type="checkbox" name="terms">`
const terms = document.querySelector('[name="terms"]');
if (terms) terms.checked = true;

/* ========================================================================== */

// Put focus on `<input id="username">` if it exists
document.getElementById('username')?.focus();

/* ========================================================================== */

// Add autocomplete="off" to `<form action="/post">` if it exists
document.querySelector('form[action="/post"]')?.setAttribute('autocomplete', 'off');

/* ========================================================================== */

// Change background color to skyblue
document.body.style.backgroundColor = 'skyblue';
// -OR-
document.body.setAttribute('style', 'background-color: skyblue;');

/* ========================================================================== */

// [Gmail] Select to search within "Mail & Spam & Trash" in search options
function pollDropdown() {
  // Do nothing if search options not open
  const searchOptions = document.querySelector('[style^="visibility: visible"]');
  if (!searchOptions) {
    window.isAutofilling = false;
    return;
  }
  // Do nothing if in the middle of autofilling
  if (window.isAutofilling) return;
  const dropdown = document.querySelector('[aria-label="Search within"] [role="option"]');
  if (dropdown) {
    // Click on the dropdown
    window.isAutofilling = true;
    console.log('Dropdown found!', dropdown);
    dropdown.dispatchEvent(new MouseEvent('mousedown', {bubbles: true}));
    // Click on the dropdown option
    setTimeout(() => {
      // Update to match your own locale (e.g., "Mail & Spam & Bin")
      const option = document.querySelector('[title="Mail & Spam & Trash"] div');
      if (option) {
        console.log('Dropdown option found!', option);
        // Gmail requires these four events to be fired
        option.dispatchEvent(new MouseEvent('mousedown', {bubbles: true}));
        option.dispatchEvent(new MouseEvent('mouseup', {bubbles: true}));
        option.parentElement.dispatchEvent(new MouseEvent('mousedown', {bubbles: true}));
        option.parentElement.dispatchEvent(new MouseEvent('mouseup', {bubbles: true}));
      }
    }, 100); // Delay recommended
  }
}

// Prevent duplicates
if (!window.isPolling) {
  window.isPolling = true;
  setInterval(pollDropdown, 1000); // Poll every 1s
}
