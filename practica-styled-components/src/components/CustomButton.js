import styled, {css} from 'styled-components';

export const StyledButton = styled.button`
    width: 50%;
    height: 75px;
    margin: 0px;
    color: black;
    font-size: 20px;
    background-color: lightgreen;
    cursor: pointer;

    transition: background-color 0.3s ease;

    &:hover {
        background-color: #4CAF50;
        color: white;
    }
`;
