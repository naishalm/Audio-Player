
async function fetchData() {



    const validUrl = require('valid-url');

    const url = 'http://localhost:3001/tracks';

    if (validUrl.isUri(url)) {
        // The URL is valid, proceed with the function that requires the URL
    } else {
        console.error('Invalid URL:', url);
    }

    try {
        const response = await fetch('http://localhost:3001/tracks');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}