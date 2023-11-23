// Fetch the list of countries from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  const countriesSelect = document.getElementById('countries');

  // Loop through the countries and add them to the drop-down
  data.forEach(country => {
    const option = document.createElement('option');
    option.value = country.name.common; // You can use other properties like alpha2Code, alpha3Code, etc.
    option.textContent = country.name.common;
    countriesSelect.appendChild(option);
  });
})
.catch(error => console.error('Error fetching countries:', error));