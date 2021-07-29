import { IHero } from '../../types/IHero';
import HeroCard from '../HeroCard';
import { Ul } from './styles';

type Props = {
    heroes: IHero[];
    deleteHero?: (heroId: string) => void
}

function HeroList({ heroes, deleteHero }: Props) {

    return (
        <Ul>
            {heroes?.map((hero) => (
                <li key={hero.id}>
                    <HeroCard hero={hero} deleteHero={deleteHero} />
                </li>
            ))}
        </Ul>
    );
}

export default HeroList;
