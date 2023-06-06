import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <img className='card__image' src={props.imgURL} alt="artwork" />
      <div className='card__info'>
        <h2 className='card__title'>{props.title}</h2>
        <h4 className='card__description'>{props.description.substring(0, 60) + '...'}</h4>
      </div>
    </div>
  )
}

export default Card
