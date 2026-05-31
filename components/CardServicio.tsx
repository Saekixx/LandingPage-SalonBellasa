import React from 'react';

interface CardServicioProps {
  titulo: string;
  descripcion: string;
  precio: number;
  duracionMinutos: number;
  imageUrl: string;
  url: string;
}

export default function CardServicio({
  titulo,
  descripcion,
  precio,
  duracionMinutos,
  imageUrl,
  url,
}: CardServicioProps) {
  return (
    <div>
      <a href={url}>
        <img src={imageUrl} alt={titulo} />
        <span>{duracionMinutos} min</span>
      </a>
      <div>
        <h3>
          {titulo}
        </h3>
        <p>
          {descripcion}
        </p>
        <div>
          <span>${precio.toFixed(2)}</span>
          <a href={url}>Agendar</a>
        </div>
      </div>
    </div>
  );
}
