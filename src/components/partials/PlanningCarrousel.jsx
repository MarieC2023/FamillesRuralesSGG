import React, { useState, useEffect } from 'react';
import './planningCarrousel.css';

const PlanningCarrousel = ({ images, titre }) => {
  const [open, setOpen] = useState(false);

  // Bloquer le scroll en arrière-plan quand la modale est ouverte
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="planning-wrapper d-flex flex-column align-items-center text-center">
      <h3 className="planning-titre mb-3">{titre}</h3>

      <div 
  className="planning-miniature-container"
  onClick={() => setOpen(true)}
>
  <img
    src={images[0]}
    alt={`Aperçu du planning ${titre}`}
    className="planning-miniature"
  />
</div>


      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setOpen(false)}>×</button>
            <h3>{titre}</h3>
            <div className="carousel">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Page ${i + 1} du planning ${titre}`}
                  className="carousel-img"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanningCarrousel;
