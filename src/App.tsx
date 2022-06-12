import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { PersonPage } from "./pages/person";
import { StarShipPage } from "./pages/star-ship";

function App() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/person" element={<PersonPage />} />
                <Route path="starship" element={<StarShipPage />} />
            </Routes>
        </>
    );
}

export default App;
