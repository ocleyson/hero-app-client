import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 300px;
    background-color: white;
    border-radius: 5px;
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)
`;

export const Img = styled.img`
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: 400px;
`;

export const Title = styled.h2`
    margin: 0 0 10px 5px;
`;

export const ButtonDeleteCard = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px;
    background-color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

    svg {
        width: 20px;
        height: 20px;
        color: #8c8c8c;
    }
`;