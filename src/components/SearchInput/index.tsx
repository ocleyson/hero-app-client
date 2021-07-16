import React, { useState } from 'react';
import api from '../../services/api';
import { IHero } from '../../types/IHero'
import { HeroContext } from '../../contexts/HeroContext';

function SearchInput() {
    const [inputText, setInputText] = useState("");

    const fetchHeroes = async () => {
        const { data } = await api.get(`/search/${inputText}`);

        return data;
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, setHeroes: React.Dispatch<React.SetStateAction<IHero[]>>) => {
        event.preventDefault();

        const data = await fetchHeroes()

        setHeroes(data)
    }


    return (
        <HeroContext.Consumer>
            {context => (
                <div className="search-input">
                    <form onSubmit={(e) => handleSubmit(e, context?.setHeroes)}>
                        <input 
                            type="text"
                            placeholder="pesquise por um herói ou vilão"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />

                        <button type="submit">
                            pesquisar
                        </button>
                    </form>
                </div>
            )}
        </HeroContext.Consumer>
    );
}

export default SearchInput;
