import { IHero } from '../../types/IHero';

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
                </li>
            ))}
        </ul>
    );
}

export default HeroList;
