import { Link, ListItem } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { PersonInfo } from "../types";

export interface PersonProps {
    info: PersonInfo;
}

export const PersonItem: React.FC<PersonProps> = ({ info }) => {
    return (
        <ListItem>
            <Link component={RouterLink} to={`/person?url=${info.url}`}>
                {info.name}
            </Link>
        </ListItem>
    );
};
