import React, { useState } from 'react';
import api from '../../services/api';
import { IHero } from '../../types/IHero'
import { HeroContext } from '../../contexts/HeroContext';
import { useHistory } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { Container, Input, Button } from './styles';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

function SearchInput() {
    const [inputText, setInputText] = useState("");
    const [loading, setLoading] = useState(false);

    let history = useHistory()

    const fetchHeroes = async () => {
        setLoading(true)

        const { data } = await api.get(`/search/${inputText}`);

        return data;
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, setHeroes: React.Dispatch<React.SetStateAction<IHero[]>>) => {
        event.preventDefault();

        const data = await fetchHeroes()

        setHeroes(data)

        setLoading(false)

        history.push("/")
    }


    return (
        <HeroContext.Consumer>
            {context => (
                <Container className="search-input">
                    <form onSubmit={(e) => handleSubmit(e, context?.setHeroes)}>
                        <Input 
                            type="text"
                            placeholder="pesquise por um herói ou vilão"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />

                        <Button type="submit">
                            {loading ?
                                <Loader 
                                    type="TailSpin"
                                />
                                :
                                <FiSearch />
                            }
                        </Button>
                    </form>
                </Container>
            )}
        </HeroContext.Consumer>
    );
}

export default SearchInput;
