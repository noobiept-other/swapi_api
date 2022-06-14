import { useEffect, useState } from "react";
import { PersonInfo, StarshipInfo } from "../types";
import { toStarshipUrl } from "../utils";

export interface UseStarShipArgs {
    id: string | null;
}

export const useStarShip = ({ id }: UseStarShipArgs) => {
    const [ship, setShip] = useState<StarshipInfo>();
    const [pilots, setPilots] = useState<PersonInfo[]>();

    useEffect(() => {
        if (!id) {
            return;
        }

        const fetchShip = async () => {
            const response = await fetch(toStarshipUrl(id));
            const json = await response.json();

            setShip(json);
        };

        try {
            fetchShip();
        } catch (e) {
            console.log(e);
        }
    }, [id]);

    useEffect(() => {
        const fetchStarship = async (pilotsUrls: string[]) => {
            const responses = await Promise.all(
                pilotsUrls.map((url) => fetch(url))
            );
            const jsonList = await Promise.all(
                responses.map(async (item) => await item.json())
            );

            setPilots(jsonList as unknown as PersonInfo[]);
        };

        try {
            if (!ship?.pilots) {
                return;
            }

            fetchStarship(ship.pilots);
        } catch (e) {
            console.log(e);
        }
    }, [ship]);

    return { ship, pilots };
};
