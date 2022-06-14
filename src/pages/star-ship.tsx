import { Card, Link, Typography } from "@mui/material";
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
        <Card sx={{ padding: 2 }}>
            <div>
                Name:{" "}
                <Typography display="inline" fontWeight="bold">
                    {ship.name}
                </Typography>
            </div>
            <div>
                Model: <Typography display="inline">{ship.model}</Typography>
            </div>
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
        </Card>
    );
};
