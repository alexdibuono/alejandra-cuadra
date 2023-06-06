import React from 'react';
import './artwork.css';
import _, { functionsIn } from 'lodash';


const Artwork = (props) => {
  return (
    <div className='art'>
      <a className='art__link' href={_.lowerCase(props.category) + '/' + _.kebabCase(props.title) + '/' + props.id}>
        <img className='art__image' src={props.imgURL} alt="artwork" />
        <div className='art__info'>
          <h2 className='art__title'>{props.title}</h2>
          <h4 className='art__description' dangerouslySetInnerHTML={{__html: props.description.substring(0, 100) + "..."}} /><br/>
        </div>
      </a>
    </div>
  )
}

export default Artwork