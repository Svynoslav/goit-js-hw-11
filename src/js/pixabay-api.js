'use strict';
// * У файлі pixabay-api.js зберігай функції для HTTP-запитів.


async function fetchData(url, params) {
    const response = await fetch(`${url}?${params}`)
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export { fetchData };

