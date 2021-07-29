import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
    position: fixed;
    width: 370px;
    height: 100%;
    background-color: ${colors.primary};
    top: 0;
    transition: all 200ms ease-in;
    z-index: 99999;

    svg {
        margin: 5px 0 0 5px;
    }

    &.closed {
        left: -370px;
    }

    &.opened {
        left: 0;
    }
`;