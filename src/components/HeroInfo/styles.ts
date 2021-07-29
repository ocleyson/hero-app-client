import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Img = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 100px;
`;

export const ContainerStoreHero = styled.div`
    p {
        font-size: 20px;
        color: white;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: ${colors.green};
    border-radius: 5px;

    button {
        background-color: transparent;
        border: none;
        width: 100%;
        cursor: pointer;
    }
`;

export const Ul = styled.ul`
    list-style: none;

    li {
        padding: 10px;
        border-bottom: 1px solid black;

        &:last-child {
            margin-bottom: 15px;
        }
    }
`;