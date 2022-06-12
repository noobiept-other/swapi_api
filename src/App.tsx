import React from "react";
import "./App.css";
import { useAllPersons } from "./hooks/use-person.hook";
import { Person } from "./components/person";

function App() {
    const persons = useAllPersons();

    return (
        <div>
            <ul>
                {persons?.results.map((person) => (
                    <li key={person.name}>
                        <Person info={person} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
