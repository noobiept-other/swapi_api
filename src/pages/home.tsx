import { Button, Stack } from "@mui/material";
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
            <Stack direction="row" spacing={2} marginBottom={2}>
                <Button
                    variant="contained"
                    disabled={!persons.previous}
                    onClick={goToPrevious}
                >
                    Previous
                </Button>
                <Button
                    variant="contained"
                    disabled={!persons.next}
                    onClick={goToNext}
                >
                    Next
                </Button>
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }}>
                {persons?.results.map((person) => (
                    <PersonItem key={person.name} info={person} />
                ))}
            </Stack>
        </div>
    );
};
