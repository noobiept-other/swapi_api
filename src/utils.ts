const BASE_URL = "https://swapi.dev/api/";
const PEOPLE_URL = BASE_URL + "people";
const STARSHIPS_URL = BASE_URL + "starships";

export function constructPersonUrl(url: string) {
    return `/person?id=${getIDFromUrl(url)}`;
}

export function constructStarshipUrl(url: string) {
    return `/starship?id=${getIDFromUrl(url)}`;
}

function getIDFromUrl(url: string) {
    const parts = url.split("/");

    for (let a = parts.length - 1; a >= 0; a--) {
        const part = parts[a];
        const id = parseInt(part, 10);
        if (!isNaN(id)) {
            return id;
        }
    }
}

export function toPeopleUrl(id?: string) {
    if (!id) {
        return PEOPLE_URL;
    }

    return `${PEOPLE_URL}/${id}`;
}

export function toStarshipUrl(id: string) {
    return `${STARSHIPS_URL}/${id}`;
}
