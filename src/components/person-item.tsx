import { Card, Link, Box } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { PersonInfo } from "../types";
import { constructPersonUrl } from "../utils";

export interface PersonProps {
    info: PersonInfo;
}

export const PersonItem: React.FC<PersonProps> = ({ info }) => {
    return (
        <Card variant="outlined">
            <Box padding={4}>
                <Link component={RouterLink} to={constructPersonUrl(info.url)}>
                    {info.name}
                </Link>
            </Box>
        </Card>
    );
};
