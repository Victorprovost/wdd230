// Base URL for repository
const baseURL = "https://Victorprovost.github.io/wdd230/"; 


// URL for links.json
const linksURL = "https://Victorprovost.github.io/wdd230/data/links.json";



// Async function to fetch links data
async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // Testing only
            displayLinks(data.weeks);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display links
function displayLinks(weeks) {
    const linksList = document.querySelector('#activity-links');
    linksList.innerHTML = ''; // Clear existing content

    weeks.forEach(week => {
        // Create week header
        const weekItem = document.createElement('li');
        weekItem.textContent = week.week;
        weekItem.style.fontWeight = 'bold';
        linksList.appendChild(weekItem);

        // Create links for the week
        week.links.forEach(link => {
            const linkItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            if (link.url.startsWith('http')) {
                anchor.target = '_blank';
                anchor.rel = 'noopener';
            }
            linkItem.appendChild(anchor);
            linksList.appendChild(linkItem);
        });
    });
}

// Invoke the fetch function
getLinks();


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');

// API URL for Abuja, Nigeria (lat: 9.06, lon: 7.47)
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=9.06&lon=7.47&units=imperial&appid=2a785e428920b4e59275e40deb368377';

// Async function to fetch weather data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to display weather data
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}°F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1); 
}

// Invoke the fetch function
apiFetch();