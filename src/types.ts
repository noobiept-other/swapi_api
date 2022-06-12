export interface StarshipInfo {
    name: string;
    model: string;
    manufacturer: string;
    starship_class: string;
    pilots: PersonInfo[];
    url: string;
}

export interface PersonInfo {
    name: string;
    height: string;
    starships: string[];
    url: string;
}

export interface AllPersonsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PersonInfo[];
}
