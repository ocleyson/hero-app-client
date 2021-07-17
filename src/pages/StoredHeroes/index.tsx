import { useState, useEffect } from 'react';
import api from '../../services/api';
import { IHero } from '../../types/IHero'
import HeroList from '../../components/HeroList';

function StoredHeroes() {
    const [heroes, setHeroes] = useState<IHero[]>([])

    const fetchHeroes = async () => {
        const { data } = await api.get(`/heroes`);

        setHeroes(data)
    }

    const deleteHero = async (heroId: string) => {
        await api.delete(`/heroes/${heroId}`)

        setHeroes(heroes.filter((hero) => hero.id !== heroId))
    }

    useEffect(() => {
        fetchHeroes()
    }, [])


    return (
        <div>
            <h2>Heróis cadastrados</h2>

            <HeroList heroes={heroes} deleteHero={deleteHero} />
        </div>
    );
}

export default StoredHeroes;
