 variablesconst dropBtn = document.querySelector(".dropdown-bar");
 let mainContent = document.querySelector(".main-content");
 const regions = document.querySelector(".regions");
 const countrySearch = document.querySelector(".countrySearch");
 const searchFilter = document.querySelector(".searchFilter");
 const darkMode = document.querySelector(".mode");
 functions Dropdown Menu Functionconst dropdown = () => {
   dropBtn.classList.toggle("active");
 }
 Function to load the country from an apiconst loadCountries = (api) => {
   let loader = `<div class="loader">Loading....</div>`;
   document.querySelector(".loading").innerHTML = loader;
   fetch(api).then(res => res.json()).then((data) => {
     mainContent.innerHTML = "";
     data.forEach((country) => {
       let box = ` <div class="col-md-4 col-lg-3 mb-5 box-container"> <div class="box"> <div class="box-img"> <img src="${country.flag}" alt="Country"> </div> <div class="box-content py-4 px-3"> <h3>${country.name}</h3> <p>Population: <span>${country.population}</span></p> <p>Region: <span>${country.region}</span></p> <p>Capital: <span>${country.capital}</span></p> </div> </div> </div> `;
       mainContent.innerHTML += box;
     }) document.querySelector(".loading").innerHTML = '';
   }).catch((error) => {
     console.warn(error);
   });
 }
 Show Countries By Regionconst showRegion = (e) => {
   if (e.target.classList.contains('region')) {
     loadCountries(`https://restcountries.eu/rest/v2/region/${e.target.textContent}`);
   }
 }
 Show country by search filterconst searchCountry = () => {
   loadCountries(`https://restcountries.eu/rest/v2/name/${countrySearch.value}`);
 }
 const showCountryDetails = (e) => {
   if (e.target.classList.contains('box')) {
     const countryName = e.target.children[1].firstElementChild.textContent;
     fetch(`https://restcountries.eu/rest/v2/name/${countryName}`).then((res) => res.json()).then((data) => {
       searchFilter.innerHTML = '';
       document.querySelector('.back-btn').style.display = 'flex';
       searchFilter.classList.remove('mt-5');
       mainContent.classList.remove('row');
       mainContent.innerHTML = '';
       let box = ` <div class="row mt-5"> <div class="col-md-6"> <img class="img-fluid" width="100%" height="auto" src="${data[0].flag}"> </div> <div class="col-md-6"> <h2 class="mt-4"><b>${data[0].name}</b></h2> <div class="countryDetails row"> <div class="col-md-6"> <p><b>Native Name:</b> <span>${data[0].nativeName}</span></p> <p><b>Population:</b> <span>${data[0].population}</span></p> <p><b>Region:</b> <span>${data[0].region}</span></p> <p><b>Sub Region:</b> <span>${data[0].subregion}</span></p> <p><b>Capital:</b> <span>${data[0].capital}</span></p> </div> <div class="col-md-6"> <p><b>Top Level Domain:</b> `;
       data[0].topLevelDomain.forEach((domain) => {
         box += `<span>${domain}</span>,`
       }) box += `</p>`
       box += `<p><b>Currencies:</b> `;
       data[0].currencies.forEach((currency) => {
         box += `<span>${currency.name}</span>,`
       }) box += `</p>`
       box += `<p><bLanguages:</b> `;
       data[0].languages.forEach((language) => {
         box += `<span>${language.name}</span>,`
       }) box += `</p>`
       box += ` </div> </div> <div class"border mt-5 d-flex align-items-center"> <h4><b>Border Countries:</b></h4>`
       if (data[0].borders.length !== 0) {
         box += `<div class="mt-4 mt-md-0 mb-5 mb-md-0">`;
         data[0].borders.forEach((border) => {
           box += `<span class="px-3 py-2 mr-2">${border}</span>`;
         }) box += `</div>`;
       }
       box += ` </div> </div> </div>`;
       mainContent.innerHTML += box;
     })
   }
 }
 const darkModeToggle = () => {
   let body = document.querySelector("body");
   let navbar = document.querySelector(".navbar");
   let navbrand = document.querySelector(".navbar-brand");
   let search = document.querySelector(".search");
   let input = document.querySelector("input");
   let filter = document.querySelector(".filter");
   let box = document.querySelectorAll('.box');
   let backBtn = document.querySelector('.back-btn');
   if (!darkMode.classList.contains('dark')) {
     darkMode.classList.add('dark');
     body.style.backgroundColor = 'hsl(207, 26%, 17%)';
     body.style.color = 'hsl(0, 0%, 100%)';
     navbar.style.backgroundColor = 'hsl(209, 23%, 22%)';
     search.style.backgroundColor = 'hsl(209, 23%, 22%)';
     filter.style.backgroundColor = 'hsl(209, 23%, 22%)';
     backBtn.style.backgroundColor = 'hsl(209, 23%, 22%)';
     box.forEach((item) => {
       item.style.backgroundColor = 'hsl(209, 23%, 22%)';
       item.style.boxShadow = '5px 5px 8px -6px hsl(207, 26%, 17%)';
     }) navbar.style.boxShadow = '5px 5px 8px -6px hsl(207, 26%, 17%)';
     search.style.boxShadow = '5px 5px 8px -6px hsl(207, 26%, 17%)';
     filter.style.boxShadow = '5px 5px 8px -6px hsl(207, 26%, 17%)';
     backBtn.style.boxShadow = '5px 5px 8px -6px hsl(207, 26%, 17%)';
     input.style.color = 'hsl(0, 0%, 100%)';
     navbrand.style.color = 'hsl(0, 0%, 100%)';
     darkMode.style.color = 'hsl(0, 0%, 100%)';
   } else {
     darkMode.classList.remove('dark');
     body.style.backgroundColor = 'hsl(0, 0%, 98%)';
     body.style.color = 'hsl(200, 15%, 8%)';
     navbar.style.backgroundColor = 'hsl(0, 0%, 100%)';
     search.style.backgroundColor = 'hsl(0, 0%, 100%)';
     filter.style.backgroundColor = 'hsl(0, 0%, 100%)';
     backBtn.style.backgroundColor = 'hsl(0, 0%, 100%)';
     box.forEach((item) => {
       item.style.backgroundColor = 'hsl(0, 0%, 100%)';
       item.style.boxShadow = '0 5px 8px -6px hsl(0, 0%, 80%)';
     }) navbar.style.boxShadow = '0 5px 8px -6px hsl(0, 0%, 80%)';
     search.style.boxShadow = '0 5px 8px -6px hsl(0, 0%, 80%)';
     filter.style.boxShadow = '0 5px 8px -6px hsl(0, 0%, 80%)';
     backBtn.style.boxShadow = '0 5px 8px -6px hsl(0, 0%, 80%)';
     input.style.color = 'hsl(200, 15%, 8%)';
     navbrand.style.color = 'hsl(200, 15%, 8%)';
     darkMode.style.color = 'hsl(200, 15%, 8%)';
     backBtn.style.color = 'hsl(200, 15%, 8%)';
   }
 }
 EventsdropBtn.addEventListener('click', dropdown);
 window.addEventListener('load', loadCountries('https://restcountries.eu/rest/v2/all'));
 regions.addEventListener('click', showRegion);
 countrySearch.addEventListener('keyup', searchCountry);
 mainContent.addEventListener("click", showCountryDetails);
 darkMode.addEventListener("click", darkModeToggle);
