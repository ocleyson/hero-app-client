import { useState } from 'react'
import GlobalStyle from '../../styles/global';
import NavBar from '../NavBar';
import { HeroContext } from '../../contexts/HeroContext'
import { IHero } from '../../types/IHero'

type Props = {
    children: JSX.Element
}

function App({ children }: Props) {
    const [heroes, setHeroes] = useState<IHero[]>([])

    return (
        <HeroContext.Provider value={{heroes, setHeroes}}>
            <div className="app">
                <GlobalStyle />

                <NavBar />

                { children }
            </div>
        </HeroContext.Provider>
    );
}

export default App;
