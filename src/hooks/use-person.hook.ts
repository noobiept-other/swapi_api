import { useEffect, useState } from "react";
import { PersonInfo, StarshipInfo } from "../types";
import { toPeopleUrl } from "../utils";

export interface UsePersonArgs {
    id: string | null;
}

export const usePerson = ({ id }: UsePersonArgs) => {
    const [person, setPerson] = useState<PersonInfo>();
    const [starships, setStarships] = useState<StarshipInfo[]>([]);

    useEffect(() => {
        if (!id) {
            return;
        }

        const fetchPerson = async () => {
            const response = await fetch(toPeopleUrl(id));
            const json = (await response.json()) as PersonInfo;

            setPerson(json);
        };

        try {
            fetchPerson();
        } catch (e) {
            console.log(e);
        }
    }, [id]);

    useEffect(() => {
        const fetchStarship = async (shipUrls: string[]) => {
            const responses = await Promise.all(
                shipUrls.map((url) => fetch(url))
            );
            const jsonList = await Promise.all(
                responses.map(async (item) => await item.json())
            );

            setStarships(jsonList as unknown as StarshipInfo[]);
        };

        try {
            if (!person?.starships) {
                return;
            }

            fetchStarship(person?.starships);
        } catch (e) {
            console.log(e);
        }
    }, [person]);

    return {
        person,
        starships,
    };
};
