import React from "react";
import { Link } from "react-router-dom";
import { PersonInfo } from "../types";

export interface PersonProps {
    info: PersonInfo;
}

export const PersonItem: React.FC<PersonProps> = ({ info }) => {
    return (
        <div>
            <Link to={`/person?url=${info.url}`}>{info.name}</Link>
        </div>
    );
};
