import React, { useState } from 'react';

function GaleriaDeImagenes() {
  const [imagenes, setImagenes] = useState([
    { src: 'imgs/bird.jpg', alt: 'Bird', caption: 'Singing Bird' },
    { src: 'imgs/cat.jpg', alt: 'Cat', caption: 'Black cat' },
    { src: 'imgs/dog.jpg', alt: 'Dog', caption: 'Husky' },
    { src: 'imgs/elephants.jpg', alt: 'Elephants', caption: 'Elephants' }
  ]);
  const [url, setUrl] = useState('');
  const [caption, setCaption] = useState('');

  const agregarImagen = () => {
    if (url && caption) {
      setImagenes([...imagenes, { src: url, alt: `Imagen ${imagenes.length + 1}`, caption }]);
      setUrl('');
      setCaption('');
    } else {
      alert('Por favor introduce imagen y pie');
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Galería de imágenes</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL de la imagen" />
        <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Pie de foto" />
        <button onClick={agregarImagen}>Agregar Imagen</button>
      </div>
      <div className="galeria" style={{ display: 'flex', gap: '10px', justifyContent: 'center', 
          margin: '0 auto', maxWidth: '80%', flexWrap: 'wrap' }}>
        {imagenes.map((img, index) => (
          <div key={index}>
            <img src={img.src} alt={img.alt} width="300" height="250" />
            <p>{img.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GaleriaDeImagenes;