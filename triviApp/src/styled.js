import styled from 'styled-components';

export const Row = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    max-width: 800px;
    margin: auto;
    align-items: center;
`;

export const TextoPregunta = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 2px gray;
    text-align: center;
`;

export const Box = styled.div`
    font-size: 1.5rem;
    padding-left: 35px;

    p{
        display: flex;
        align-items: center;

        button{
            margin-right: 10px;
            font-size: 1.5rem;
            font-weight: "bold";
            cursor: pointer;
        }
    }
`;