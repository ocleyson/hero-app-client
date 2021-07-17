import { IHero } from '../../types/IHero';
import { Link } from 'react-router-dom'

type Props = {
    heroes: IHero[]
}

function HeroList({ heroes }: Props) {
    return (
        <ul>
            {heroes.map((hero) => (
                <li key={hero.id}>
                    <img src={hero.imageUrl} alt={hero.name} />

                    <h2>{hero.name}</h2>

                    <Link style={{ color: '#000' }} to={`/hero/${hero.id}`}>Saiba Mais</Link>
                </li>
            ))}
        </ul>
    );
}

export default HeroList;
