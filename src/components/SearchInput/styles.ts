import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: white;
    border-radius: 5px;
    margin-left: 10px;
    padding: 5px;

    form {
        display: flex;
        flex-direction: row;
    }
`;

export const Input = styled.input`
    border: none;
    flex-grow: 2;
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;

    svg {
        height: 20px;
        width: 20px;
        color: ${colors.primary}
    }
`;