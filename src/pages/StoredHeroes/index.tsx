import { useState, useEffect } from 'react';
import api from '../../services/api';
import { IHero } from '../../types/IHero'
import HeroList from '../../components/HeroList';
import Loading from '../../components/Loading';

function StoredHeroes() {
    const [heroes, setHeroes] = useState<IHero[]>([])
    const [loading, setLoading] = useState(false);

    const fetchHeroes = async () => {
        setLoading(true)

        const { data } = await api.get(`/heroes`);

        setHeroes(data)

        setLoading(false)
    }

    const deleteHero = async (heroId: string) => {
        await api.delete(`/heroes/${heroId}`)

        setHeroes(heroes.filter((hero) => hero.id !== heroId))
    }

    useEffect(() => {
        fetchHeroes()
    }, [])


    return (
        <main>
            <h2>Heróis e Vilões cadastrados</h2>

            {loading
                ? <Loading />
                : <HeroList heroes={heroes} deleteHero={deleteHero} />
            }
        </main>
    );
}

export default StoredHeroes;
