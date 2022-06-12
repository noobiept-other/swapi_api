import { useSearchParams } from "react-router-dom";

export const PersonPage = () => {
    const [searchParams] = useSearchParams();
    const url = searchParams.get("url");

    return <div>{url}</div>;
};
