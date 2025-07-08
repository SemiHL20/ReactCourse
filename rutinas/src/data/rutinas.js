import puente from '../assets/img/puente.png';
import laterales from '../assets/img/laterales.png';
import sentadillas from '../assets/img/sentadillas.png';

export default [
    {
        titulo: "Trabajo 1",
        rutina: [
            {
                nombre: 'Puente',
                descripcion: 'Ejercicio para fortalecer los glúteos y la parte baja de la espalda.',
                imagen: puente,
                series: 3,
                repeticiones: 12
            },
            {
                nombre: 'Laterales',
                descripcion: 'Ejercicio para trabajar los músculos laterales del cuerpo.',
                imagen: laterales,
                series: 3,
                repeticiones: 15
            },
            {
                nombre: 'Sentadillas',
                descripcion: 'Ejercicio para fortalecer las piernas y glúteos.',
                imagen: sentadillas,
                series: 4,
                repeticiones: 10
            }
        ]
    }
]