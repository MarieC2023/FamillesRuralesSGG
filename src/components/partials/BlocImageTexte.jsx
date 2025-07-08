import React from 'react';
import './blocImageTexte.css';

const addNbspBeforePunct = (text) => {
  if (typeof text !== 'string') return text;
  return text.replace(/ ([!:?])/g, '\u00A0$1'); // espace insécable avant :, !, ?
};

const processChildren = (children) => {
  return React.Children.map(children, child => {
    if (typeof child === 'string') {
      return addNbspBeforePunct(child);
    } else if (React.isValidElement(child) && child.props.children) {
      // Si l’enfant est lui-même un élément avec des enfants, on applique récursivement
      return React.cloneElement(child, {
        children: processChildren(child.props.children),
      });
    }
    return child;
  });
};

const BlocImageTexte = ({ imageSrc, imageAlt, children, imageLeft = true, className = "" }) => {
  const isMultipleImages = Array.isArray(imageSrc);

  return (
    <section
      className={`bloc-texte-image d-flex ${
        imageLeft ? 'flex-row' : 'flex-row-reverse'
      } ${className}`}
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
        {processChildren(children)}
      </div>
    </section>
  );
};

export default BlocImageTexte;
