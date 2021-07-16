import { HeroContext } from '../../contexts/HeroContext'

function HeroList() {
    return (
        <HeroContext.Consumer>
            {context => (
                <ul>
                    {context.heroes.map((hero) => (
                        <li key={hero.id}>
                            <img src={hero.imageUrl} alt={hero.name} />

                            <h2>{hero.name}</h2>
                        </li>
                    ))}
                </ul>
            )}
        </HeroContext.Consumer>
    );
}

export default HeroList;
