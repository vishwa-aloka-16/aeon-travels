// Script to handle dropdown and currency selection
document.addEventListener('DOMContentLoaded', function () {
  const currencyButton = document.getElementById('currencyButton');
  const currencyText = document.getElementById('currencyText');
  const currencyDropdown = document.getElementById('currencyDropdown');
  const currencyItems = document.querySelectorAll('.currency-item');

  // Toggle dropdown visibility
  currencyButton.addEventListener('click', function () {
    currencyDropdown.classList.toggle('hidden');
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', function (e) {
    if (!currencyButton.contains(e.target) && !currencyDropdown.contains(e.target)) {
      currencyDropdown.classList.add('hidden');
    }
  });

  // Update currency text when a currency is selected
  currencyItems.forEach(item => {
    item.addEventListener('click', function () {
      const selectedCurrency = item.textContent;
      currencyText.textContent = selectedCurrency;
      currencyDropdown.classList.add('hidden');
    });
  });

  // Fetch currency data from API
  fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => {
      const currencies = Object.keys(data.rates);
      // Add currencies dynamically to the dropdown
      currencies.forEach(currency => {
        if (!document.querySelector(`#currencyDropdown a:contains(${currency})`)) {
          const li = document.createElement('li');
          li.innerHTML = `<a href="#" class="currency-item block px-4 py-2 text-gray-700 hover:bg-gray-100">${currency}</a>`;
          currencyDropdown.querySelector('ul').appendChild(li);
        }
      });
    })
    .catch(error => console.error('Error fetching currency data:', error));
});

document.addEventListener('DOMContentLoaded', function () {
  // Currency Toggle Functionality
  const currencyButton = document.querySelector('#currencyButton');
  const currencyDropdown = document.querySelector('#currencyDropdown');
  const currencyItems = document.querySelectorAll('.currency-item');

  // Toggle the visibility of the currency dropdown
  currencyButton.addEventListener('click', function () {
    currencyDropdown.classList.toggle('hidden');
  });

  // Close the dropdown if clicked outside
  document.addEventListener('click', function (e) {
    if (!currencyButton.contains(e.target) && !currencyDropdown.contains(e.target)) {
      currencyDropdown.classList.add('hidden');
    }
  });

  // Change the currency when an option is selected
  currencyItems.forEach(item => {
    item.addEventListener('click', function () {
      const selectedCurrency = item.textContent;
      currencyButton.textContent = selectedCurrency;
      currencyDropdown.classList.add('hidden');
    });
  });

  // Form Submission Logic
  const quoteForm = document.getElementById('quoteForm');
  const submitButton = quoteForm.querySelector('[type="submit"]');
  
  submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(quoteForm);
    const data = Object.fromEntries(formData.entries());

    console.log('Form Data:', data); // Log form data for testing
  });
});