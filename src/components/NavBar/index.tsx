import { useState } from 'react';
import { Container } from './styles';
import { FiMenu } from 'react-icons/fi'

import SearchInput from '../SearchInput';
import Menu from '../Menu';

function NavBar() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <Container className="nav-bar">
            <Menu showMenu={showMenu} setShowMenu={setShowMenu} />

            <FiMenu onClick={() => setShowMenu(true)} />

            <SearchInput />
        </Container>
    );
}

export default NavBar;
