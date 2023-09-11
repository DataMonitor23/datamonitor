
document.addEventListener('DOMContentLoaded', function () {
  const countrySelect = document.getElementById('country-select');

  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      data.forEach(country => {
        const option = document.createElement('option');
        option.value = country.cca2;
        option.text = `${country.name.common} (+${country.callingCodes[0]})`;
        countrySelect.appendChild(option);
      });
    })
    .catch(error => console.error('Erreur lors de la récupération des pays', error));
});
