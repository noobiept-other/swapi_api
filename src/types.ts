export interface StarshipInfo {
    name: string;
    model: string;
    manufacturer: string;
    starship_class: string;
    pilots: PersonInfo[];
}

export interface PersonInfo {
    name: string;
    height: string;
    starships: StarshipInfo[];
    url: string;
}

export interface AllPersonsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PersonInfo[];
}
