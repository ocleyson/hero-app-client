import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: ${colors.primary};
    padding: 10px;

    svg {
        color: white;
        height: 29px;
        width: 29px;
        cursor: pointer;
    }
`;