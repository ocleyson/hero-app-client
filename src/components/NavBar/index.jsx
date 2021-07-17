import { Container } from './styles';
import { Link } from 'react-router-dom'

import SearchInput from '../SearchInput';

function NavBar() {
    return (
        <Container className="navbar">
            <SearchInput />

            <Link to="/heroes/goods">Heróis</Link>
        </Container>
    );
}

export default NavBar;
