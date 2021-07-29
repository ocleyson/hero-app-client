import { useState, useEffect } from 'react';
import api from '../../services/api';
import { IHero } from '../../types/IHero'
import { useParams } from 'react-router-dom';
import HeroInfo from '../../components/HeroInfo';
import Loading from '../../components/Loading';

interface RouteParams {
    id: string
}

function Hero() {
    const [hero, setHero] = useState<IHero | null>(null)
    const [loading, setLoading] = useState(false)

    let { id } = useParams<RouteParams>()

    useEffect(() => {
        const fetchHero = async () => {
            setLoading(true)

            const { data } = await api.get(`/heroes/${id}`);
    
            setHero(data)

            setLoading(false)
        }

        fetchHero()
    }, [id])


    return (
        <main>
            {loading
                ? <Loading />
                : <HeroInfo hero={hero} />
            }
        </main>
    );
}

export default Hero;
