import { Link } from 'react-router-dom'
import { Container } from './styles';

function MenuList() {
    return (
        <Container className="menu-list">
            <ul>
                <li>
                    <Link to="/heroes/goods">Heróis cadastrados</Link>
                </li>
                <li>
                    <Link to="/heroes/bads">Vilões cadastrados</Link>
                </li>
                <li>
                    <Link to="/heroes">Heróis e Vilões cadastrados</Link>
                </li>
            </ul>
        </Container>
    );
}

export default MenuList;
