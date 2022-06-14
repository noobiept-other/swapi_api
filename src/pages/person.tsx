import { Card, Link, Typography } from "@mui/material";
import { Link as RouterLink, useSearchParams } from "react-router-dom";
import { usePerson } from "../hooks/use-person.hook";
import { constructStarshipUrl } from "../utils";

export const PersonPage = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const personData = usePerson({ id });
    const person = personData?.person;

    if (!person) {
        return <div>Loading...</div>;
    }

    return (
        <Card sx={{ padding: 2 }}>
            <div>
                Name:{" "}
                <Typography display="inline" fontWeight="bold">
                    {person.name}
                </Typography>
            </div>
            <div>Height: {person.height}</div>
            {personData.starships.length > 0 && (
                <>
                    <div>Starships:</div>
                    <ul>
                        {personData.starships.map((item) => (
                            <li key={item.url}>
                                <Link
                                    component={RouterLink}
                                    to={constructStarshipUrl(item.url)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </Card>
    );
};
