import { Link } from "@mui/material";
import { Link as RouterLink, useSearchParams } from "react-router-dom";
import { usePerson } from "../hooks/use-person.hook";

export const PersonPage = () => {
    const [searchParams] = useSearchParams();
    const url = searchParams.get("url");
    const personData = usePerson({ url });
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
                            to={`/starship?url=${item.url}`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
