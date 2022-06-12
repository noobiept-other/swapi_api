import React from "react";
import { PersonInfo } from "../types";

export interface PersonProps {
    info: PersonInfo;
}

export const Person: React.FC<PersonProps> = ({ info }) => {
    return <div>{info.name}</div>;
};
