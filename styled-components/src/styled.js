import styled, {css} from 'styled-components';

// Define a media query for mobile devices
// This will apply styles for screens smaller than 900px
const widthSize = 900;
const moviles = `@media (max-width: ${widthSize}px)`;

export const CommonStyles = css`
    width: 720px;
    height: 50px;
    margin: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2), 
                -4px -4px 10px rgba(255, 255, 255, 0.3);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    cursor: pointer;

    &:hover {
        box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.2),
                    inset -4px -4px 10px rgba(255, 255, 255, 0.3);
        transform: translateY(2px);
    }

    &:active {
        box-shadow: inset 6px 6px 15px rgba(0, 0, 0, 0.3),
                    inset -6px -6px 15px rgba(255, 255, 255, 0.4);
        transform: translateY(4px);
    }

    /* Estilos para dispositivos móviles */
    ${moviles} {
        width: 50%;
    }
`;

export const StyledButton = styled.div`
    ${({ entrar }) => entrar?css`
        /* Estilos para true */
        ${CommonStyles}
        background-color: #007BFF;
        color: white;
        font-size: 16px;
    `:css`
        /* Estilos para false */
        ${CommonStyles}
        background-color: red;
        color: black;
        font-size: 20px;
    `};
  
  `;