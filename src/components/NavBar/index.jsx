import { Container } from './styles';

import SearchInput from '../SearchInput';

function NavBar() {
    return (
        <Container className="navbar">
            <SearchInput />
        </Container>
    );
}

export default NavBar;
