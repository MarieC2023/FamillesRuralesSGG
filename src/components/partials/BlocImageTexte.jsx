import React from 'react';
import './blocImageTexte.css';

const BlocImageTexte = ({ imageSrc, imageAlt, children, imageLeft = true }) => {
    const isMultipleImages = Array.isArray(imageSrc);

    return (
        <section
            className={`bloc-texte-image d-flex ${
                imageLeft ? 'flex-row' : 'flex-row-reverse'
            }`}
        >
            <div className={`image-col ${isMultipleImages ? 'multi-image' : ''}`}>
                {isMultipleImages ? (
                    imageSrc.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`${imageAlt} ${index + 1}`}
                            className="img-multiple"
                        />
                    ))
                ) : (
                    <img src={imageSrc} alt={imageAlt} />
                )}
            </div>

            <div className="texte-col">
                {children}
            </div>
        </section>
    );
};

export default BlocImageTexte;
