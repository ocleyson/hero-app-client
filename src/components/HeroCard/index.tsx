import { IHero } from '../../types/IHero';
import { Link } from 'react-router-dom';
import { Container, Img, Title, ButtonDeleteCard } from './styles';
import { FiTrash } from 'react-icons/fi'

type Props = {
    hero: IHero;
    deleteHero?: (heroId: string) => void
}

function HeroCard({ hero, deleteHero }: Props) {

    return (
        <Container>
            <Link to={`/hero/${hero.id}`}>
                <Img src={hero.imageUrl} alt={hero.name} />

                <Title>{hero.name} ({hero.alignment === 'good' ? 'herói' : 'vilão'})</Title>
            </Link>

            {
                !!deleteHero 
                    && 
                <ButtonDeleteCard type="button" onClick={() => deleteHero(hero.id)}>
                    <FiTrash />
                </ButtonDeleteCard>
            }
        </Container>
    );
}

export default HeroCard;
