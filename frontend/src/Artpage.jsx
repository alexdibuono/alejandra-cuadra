import React from 'react'
import { useParams } from 'react-router-dom'
import _, { functionsIn } from 'lodash';
import { useState, useEffect } from 'react';
import "./artpage.css"

function Artpage(props) {

const params = useParams();

const [currentPic, setCurrentPic] = useState();
const [images, setImages] = useState();
const [description, setDescription] = useState();
const [title, setTitle] = useState();

useEffect(() => {
  fetch(`${process.env.REACT_APP_ROOT}/${params.category}/${params.artwork}/${params.id}`)
  .then(res => res.json())
  .then(data => {       
    setCurrentPic(data[0].image[0]);
    setDescription(data[0].description);
    setTitle(data[0].title);

    setImages(
      <>
        {data[0].image.map((imageSrc, index) => (
          <img
            key={index}
            className='artpage__imageSelect'
            src={imageSrc}
            alt="option-pic"
            onClick={handleClick}
          />
        ))}
      </>
    );

  });
}, [params.artwork, params.category, params.id]);

    const handleClick = (e) => {
      setCurrentPic(e.target.src);
    }

  return (
    <div className='artpage'>
        <h1 className='artpage__title'>{title}</h1>
        <h3 className='artpage__category'>{_.startCase(params.category.replace(/-/g, ' '))}</h3>
        <div className='artpage__allImages'>
          <div className='artpage__largeImage--container'>
            <img className='artpage__largeImage' src={currentPic} alt="" />
          </div>
          <div className='artpage__imageSelect--container'>
          {images}
          </div>
        </div>
        <div className='artpage__description'>
          <pre dangerouslySetInnerHTML={{__html: description}} />
        </div>
    
    </div>
  )
}

export default Artpage
