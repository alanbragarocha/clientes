import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({
  image,
  title,
  description,
  buttonText = "Saiba mais",
  buttonLink,
  isExternal = false,
  className = ""
}) => {
  const ButtonComponent = isExternal ? 'a' : Link;
  const buttonProps = isExternal
    ? { href: buttonLink, target: '_blank', rel: 'noopener noreferrer' }
    : { to: buttonLink };

  return (
    <div className={`card ${className}`}>
      {image && (
        <div className="card-image">
          <img src={image.src} alt={image.alt || title} />
        </div>
      )}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {buttonLink && (
          <ButtonComponent className="btn-primary" {...buttonProps}>
            {buttonText}
          </ButtonComponent>
        )}
      </div>
    </div>
  );
};

export default Card;
