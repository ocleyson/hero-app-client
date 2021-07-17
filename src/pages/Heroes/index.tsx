import { useState, useEffect } from 'react';
import api from '../../services/api';
import { IHero } from '../../types/IHero'
import HeroList from '../../components/HeroList';

function Heroes() {
    const [heroes, setHeroes] = useState<IHero[]>([])

    const fetchHeroes = async () => {
        const { data } = await api.get(`/heroes/goods`);

        setHeroes(data)
    }

    useEffect(() => {
        fetchHeroes()
    }, [])


    return (
        <div>
            <h2>Heróis</h2>

            <HeroList heroes={heroes} />
        </div>
    );
}

export default Heroes;
