import { PersonItem } from "../components/person-item";
import { useAllPersons } from "../hooks/use-all-persons.hook";

export const HomePage = () => {
    const persons = useAllPersons();

    return (
        <div>
            <ul>
                {persons?.results.map((person) => (
                    <li key={person.name}>
                        <PersonItem info={person} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
