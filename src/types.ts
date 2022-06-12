export interface StarshipInfo {}

export interface PersonInfo {
    name: string;
    height: string;
    starships: StarshipInfo[];
}

export interface AllPersonsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PersonInfo[];
}
