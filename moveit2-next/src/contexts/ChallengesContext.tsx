import { createContext, useState } from 'react';

export const challengesContext = createContext({});

export function challengesProvider() {
    const [level, setLevel] = useState(1)

    function levelUp() {
        setLevel(level + 1);

    }









    return (
        <challengesContext.Provider value={{ level, levelUp }} >



        </challengesContext.Provider>

    )
}