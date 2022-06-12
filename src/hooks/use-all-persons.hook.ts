import { useEffect, useState } from "react";
import { AllPersonsResponse } from "../types";

export const useAllPersons = (url: string) => {
    const [data, setData] = useState<AllPersonsResponse>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const json = await response.json();

            setData(json);
        };

        try {
            fetchData();
        } catch (e) {
            console.log(e);
        }
    }, [url]);

    return data;
};
