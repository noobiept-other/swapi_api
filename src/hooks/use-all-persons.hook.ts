import { useEffect, useState } from "react";
import { AllPersonsResponse } from "../types";
import { BASE_URL } from "./utils";

export const useAllPersons = () => {
    const [data, setData] = useState<AllPersonsResponse>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(BASE_URL + "people");
            const json = await response.json();

            setData(json);
        };

        try {
            fetchData();
        } catch (e) {
            console.log(e);
        }
    }, []);

    return data;
};
