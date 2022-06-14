import { Link } from "@mui/material";
import { Link as RouterLink, useSearchParams } from "react-router-dom";
import { useStarShip } from "../hooks/use-star-ship.hook";
import { constructPersonUrl } from "../utils";

export const StarShipPage = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const shipData = useStarShip({ id });

    if (!shipData || !shipData.ship) {
        return <div>Loading...</div>;
    }
    const { pilots, ship } = shipData;

    return (
        <div>
            <ul>
                <li>{ship.name}</li>
                <li>{ship.model}</li>
            </ul>
            <ul>
                {pilots?.map((pilot) => (
                    <li key={pilot.url}>
                        <Link
                            component={RouterLink}
                            to={constructPersonUrl(pilot.url)}
                        >
                            {pilot.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
