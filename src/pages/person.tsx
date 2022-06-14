import { Link } from "@mui/material";
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
        <div>
            {person.name} / {person.height}
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
        </div>
    );
};
