import React, { useState, useEffect } from 'react';
import './gallery.css';
import Artwork from './Artwork';

const Gallery = (props) => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = '';
        if (props.header === 'Installation') {
          url = `${process.env.REACT_APP_ROOT}/installation`;
        } else if (props.header === 'Allegories') {
          url = `${process.env.REACT_APP_ROOT}/allegories`;
        } else if (props.header === 'Vessels') {
          url = `${process.env.REACT_APP_ROOT}/vessels`;
        } else if (props.header === 'Public Engagement') {
          url = `${process.env.REACT_APP_ROOT}/public-engagement`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const artworkArray = data.map((item) => (
          <Artwork
            key={item._id}
            id={item._id}
            category={item.category}
            title={item.title}
            imgURL={item.image[0]}
            description={item.description}
          />
        ));
        setArts(artworkArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.header]);

  return (
    <div className='gallery'>
      <div className='header'>
        <h1>{props.header}</h1>
      </div>
      <div className='cardHolder'>{arts}</div>
    </div>
  );
};

export default Gallery;
