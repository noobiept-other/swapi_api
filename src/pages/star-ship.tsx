import { Link, useSearchParams } from "react-router-dom";
import { useStarShip } from "../hooks/use-star-ship.hook";

export const StarShipPage = () => {
    const [searchParams] = useSearchParams();
    const url = searchParams.get("url");
    const shipData = useStarShip({ url });

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
                        <Link to={`/person?url=${pilot.url}`}>
                            {pilot.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
