const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};

const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countriesContainer = document.getElementById('contries-container');
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3> Name : ${country.name.common} </h3>
        <p> City: ${country.capital} </p>
        <p> Rigion: ${country.region} </p>
        <button onclick="loadCountryDetail('${country.cca2}')" class="btn">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetail = (code) => {

    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    console.log(country);
    const countryDetail = document.getElementById('country-details');
    countryDetail.innerHTML = `
    <h3>Country Name: ${country.name.common} </h3>
    <img src="${country.flags.png}">
    `

}

loadCountries();