import styled from 'styled-components';

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /*muestra 3 imagenes en fila*/
    grid-gap: 10px;
    max-width: 1200px;
    margin: auto;
    img{
        width: 100%;
        height: 150px;
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    img:hover {
        transform: scale(1.1); /* agranda la imagen al pasar el mouse */
    }
`;

export const ImagenSeleccionada = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    img {
        width: 40vw;       /* ocupa el 40% del ancho de la ventana */
        max-width: 400px;  /* no más de 900px */
        height: auto; /* mantiene la proporción de la imagen */
        max-height: 400px;
        border: 2px solid blue;
        border-radius: 10px;
    }
`;