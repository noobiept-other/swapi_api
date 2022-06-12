import { useState } from "react";
import { PersonItem } from "../components/person-item";
import { useAllPersons } from "../hooks/use-all-persons.hook";
import { PEOPLE_URL } from "../hooks/utils";

export const HomePage = () => {
    const [url, setUrl] = useState(PEOPLE_URL);
    const persons = useAllPersons(url);
    const goToPrevious = () => {
        if (persons?.previous) {
            setUrl(persons?.previous);
        }
    };
    const goToNext = () => {
        if (persons?.next) {
            setUrl(persons?.next);
        }
    };

    if (!persons) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                <button disabled={!persons.previous} onClick={goToPrevious}>
                    Previous
                </button>
                <button disabled={!persons.next} onClick={goToNext}>
                    Next
                </button>
            </div>
            <ul>
                {persons?.results.map((person) => (
                    <li key={person.name}>
                        <PersonItem info={person} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
