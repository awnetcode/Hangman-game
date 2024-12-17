Twoja struktura wygląda dobrze i poprawnie stosuje kontekst oraz podział odpowiedzialności między komponenty. Przyjrzyjmy się Twojemu kodowi i upewnijmy się, że wszystko działa zgodnie z oczekiwaniami.
Uwagi do kodu:

    Podwójna definicja Container: W kodzie masz zduplikowaną definicję komponentu Container. Wystarczy jedna:

const Container = () => {
    return (
        <CathegoryProvider>
            <Game />
            <Header />
            <Alphabet />
        </CathegoryProvider>
    );
};

export default Container;

Poprawność Game-context.jsx: Zakładam, że w pliku Game-context.jsx masz coś w tym stylu:

import { createContext, useState } from "react";

export const CathegoryContext = createContext();

export const CathegoryProvider = ({ children }) => {
    const [cathegory, setCathegory] = useState(null);
    const [task, setTask] = useState("");

    return (
        <CathegoryContext.Provider value={{ cathegory, setCathegory, task, setTask }}>
            {children}
        </CathegoryContext.Provider>
    );
};

Jeśli coś jest inaczej, daj znać — możemy to poprawić.

Używanie danych w komponentach Header i Alphabet: Aby uzyskać dostęp do danych, które ustawiłeś w kontekście, możesz użyć useContext w dowolnym komponencie.
Przykład: Header.jsx

import { useContext } from "react";
import { CathegoryContext } from "./Game-context.jsx";

const Header = () => {
    const { cathegory } = useContext(CathegoryContext);

    return (
        <header>
            <h1>Hangman Game</h1>
            <p>Current Cathegory: {cathegory}</p>
        </header>
    );
};

export default Header;

Przykład: Alphabet.jsx

import { useContext } from "react";
import { CathegoryContext } from "./Game-context.jsx";

const Alphabet = () => {
    const { task } = useContext(CathegoryContext);

    return (
        <div>
            <h2>Guess the Word</h2>
            <p>Word to Guess: {task ? "_ ".repeat(task.length) : "Loading..."}</p>
        </div>
    );
};

export default Alphabet;

Użycie efektu w Game: W Game używasz useEffect, co jest odpowiednie dla operacji inicjalizacji. Dzięki temu losowanie kategorii i zadania odbywa się tylko raz przy załadowaniu komponentu.

Stylizacja i dodatkowe poprawki: Jeśli w Alphabet wyświetlasz zakryte hasło, możesz dopasować jego wygląd za pomocą CSS, np.:

.hidden-word {
    letter-spacing: 0.5em;
    font-size: 1.5em;
    color: #555;
}

Następnie w Alphabet.jsx:

    <p className="hidden-word">{task ? "_ ".repeat(task.length) : "Loading..."}</p>

Kompletny obraz struktury

    Container.jsx – komponent nadrzędny:
        Dostarcza kontekst i integruje podkomponenty.

    Game.jsx – komponent logiki:
        Losuje kategorię i zadanie, aktualizuje stan w kontekście.

    Header.jsx – komponent nagłówka:
        Wyświetla nazwę kategorii (lub inne informacje).

    Alphabet.jsx – komponent wyświetlania zadania:
        Wyświetla zakryte hasło oraz inne elementy UI gry.

    Game-context.jsx – zarządzanie kontekstem:
        Udostępnia dane kategorii i zadania dla innych komponentów.

    Game-data.jsx – dane gry:
        Przechowuje informacje o kategoriach i zadaniach.