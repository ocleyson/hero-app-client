import { useEffect } from 'react';
import { Container } from './styles';
import MenuList from '../MenuList';
import { FiArrowLeft } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

type Props = {
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ showMenu, setShowMenu }: Props) {
    const location = useLocation();

    useEffect(() => {
        setShowMenu(false);
    }, [location.pathname, setShowMenu])

    return (
        <Container className={showMenu ? 'opened' : 'closed'}>
            <FiArrowLeft  onClick={() => setShowMenu(false)} />

            <MenuList />
        </Container>
    );
}

export default Menu;
