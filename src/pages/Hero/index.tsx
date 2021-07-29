import { useState, useEffect } from 'react';
import api from '../../services/api';
import { IHero } from '../../types/IHero'
import { useParams } from 'react-router-dom';

interface RouteParams {
    id: string
}

function Hero() {
    const [hero, setHero] = useState<IHero | null>(null)
    const [storedHero, setStoredHero] = useState(false)

    let { id } = useParams<RouteParams>()

    useEffect(() => {
        const fetchHero = async () => {
            const { data } = await api.get(`/heroes/${id}`);
    
            setHero(data)
        }

        fetchHero()
    }, [id])

    const storeHero = async () => {
        const res = await api.post("/heroes", {
            ...hero
        })

        if (res.status === 200) setStoredHero(true)
    }


    return (
        <main>
            <img src={hero?.imageUrl} alt={hero?.name} />

            <h2>Nome: {hero?.name}</h2>

            <h2>Nome completo: {hero?.fullName}</h2>

            <h2>Inteligencia: {hero?.intelligence}</h2>

            <h2>Poder: {hero?.power}</h2>

            <h2>Profissão: {hero?.occupation}</h2>

            <h2>Afiliação: {hero?.groupAffiliation}</h2>

            <h2>Parentes: {hero?.relatives}</h2>

            <h2>Alinhamento : {hero?.alignment}</h2>

            {storedHero 
                ?
                    <h2>Herói cadastrado!</h2>
                :
                    <button type="button" onClick={() => storeHero()}>
                        Cadastrar herói
                    </button>            
            }
        </main>
    );
}

export default Hero;
