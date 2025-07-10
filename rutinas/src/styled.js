import styled from 'styled-components';

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /*muestra 3 imagenes en fila*/
    grid-gap: 10px;
    max-width: 1200px;
    margin: auto;

    img{
        width: auto; /* ocupa el 100% del ancho de la celda */
        max-width: 300px; /* no más de 150px */
        height: auto;
        max-height: 200px;
        object-fit: contain; /* mantiene la proporción de la imagen */
        object-position: center; /* centra la imagen */
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    img:hover {
        transform: scale(1.1); /* agranda la imagen al pasar el mouse */
    }
`;

export const ImagenSeleccionada = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    img {
        width: 40vh;        /* ocupa el 40% del ancho de la ventana */
        max-width: 400px;   /* no más de 900px */
        height: auto;       /* mantiene la proporción de la imagen */
        max-height: 250px;
        object-fit: contain;
    }

    .info h3, .info p {
        text-align: center;
        color: #333;
        margin: 5px 0;
    }

    .info h3 {
        font-size: 18px;
    }

    .info p {
        font-size: 14px;
    }
`;