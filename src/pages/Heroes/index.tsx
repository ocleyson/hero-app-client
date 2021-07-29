import { useState, useEffect } from 'react';
import api from '../../services/api';
import { IHero } from '../../types/IHero'
import HeroList from '../../components/HeroList';
import Loading from '../../components/Loading';

function Heroes() {
    const [heroes, setHeroes] = useState<IHero[]>([])
    const [loading, setLoading] = useState(false);

    const fetchHeroes = async () => {
        setLoading(true)

        const { data } = await api.get(`/heroes/goods`);

        setHeroes(data)

        setLoading(false)
    }

    useEffect(() => {
        fetchHeroes()
    }, [])


    return (
        <main>
            <h2>Heróis cadastrados</h2>

            {loading
                ? <Loading />
                : <HeroList heroes={heroes} />
            }
        </main>
    );
}

export default Heroes;
