import "./App.css";
import { Link as RouterLink, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { PersonPage } from "./pages/person";
import { StarShipPage } from "./pages/star-ship";
import { Box, Link } from "@mui/material";

function App() {
    return (
        <>
            <ul>
                <li>
                    <Link component={RouterLink} to="/">
                        Home
                    </Link>
                </li>
            </ul>
            <Box margin={4}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/person" element={<PersonPage />} />
                    <Route path="starship" element={<StarShipPage />} />
                </Routes>
            </Box>
        </>
    );
}

export default App;
