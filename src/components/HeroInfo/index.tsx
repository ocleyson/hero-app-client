import { useState } from 'react';
import api from '../../services/api';
import { IHero } from '../../types/IHero'
import { Img, ContainerStoreHero, Ul, Container } from './styles';

type Props = {
    hero: IHero | null;
}

function HeroInfo({ hero }: Props) {
    const [storedHero, setStoredHero] = useState(false)

    const storeHero = async () => {
        const res = await api.post("/heroes", {
            ...hero
        })

        if (res.status === 200) setStoredHero(true)
    }


    return (
        <main>
            <Container>
                <Img src={hero?.imageUrl} alt={hero?.name} />

                <div style={{ width: '100%' }}>
                    <Ul>
                        <li>
                            <h2>Alter ego: {hero?.name}</h2>
                        </li>
                        <li>
                            <h2>Nome completo: {hero?.fullName}</h2>
                        </li>
                        <li>
                            <h2>Inteligencia: {hero?.intelligence}</h2>
                        </li>
                        <li>
                            <h2>Poder: {hero?.power}</h2>
                        </li>
                        <li>
                            <h2>Profissão: {hero?.occupation}</h2>
                        </li>
                        <li>
                            <h2>Afiliação: {hero?.groupAffiliation}</h2>
                        </li>
                        <li>
                            <h2>Parentes: {hero?.relatives}</h2>
                        </li>
                        <li>
                            <h2>Alinhamento : {hero?.alignment}</h2>
                        </li>
                    </Ul>

                    <ContainerStoreHero>
                        {storedHero 
                            ? <p>{hero?.alignment === 'good' ? 'Herói' : 'Vilão'} cadastrado!</p>
                            :
                                <button type="button" onClick={() => storeHero()}>
                                    <p>Cadastrar {hero?.alignment === 'good' ? 'Herói' : 'Vilão'}</p>
                                </button>            
                        }
                    </ContainerStoreHero>
                </div>
            </Container>
        </main>
    );
}

export default HeroInfo;
