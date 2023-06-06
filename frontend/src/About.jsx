import React from 'react';
import './about.css';

const About = (props) => {



  return (
    <div className='about'>
      <div className='header'>
        <h1>{props.header}</h1>
      </div>
      <div className='main'>
        <div className='main__imgp'>
          <img src={require('./assets/alejandra.jpg')} alt="alejandra" className='main__img'/>
          <p className='first__p'>Alejandra Cuadra Sanchez is an interdisciplinary maker living and working in the Northeast, 
            Cuadra holds a BFA in Sculpture and a Minor in Public Engagement from Maine College of Art. Cuadra holds an Associate Degree from Cape Cod Community College.  
            Transplanted from her homeland of Peru, she can never forget where she came from and works to reclaim her sense of belonging within the United States. 
            She threads components of immigration, displacement, belonging, culture, rituals, traditions, and memories. </p>
        </div>
        <p>Cuadra was a 2018-2019 Warren Public Engagement Fellow, throughout her studies she worked collaboratively in curating shows, art making events, 
          a community meal, and along other Public Engagement events. Cuadra has attended residencies at Yale Norfolk School of Art, Monson Arts, Watershed Center for Ceramic Arts, 
          and the Ellis-Beauregard Foundation. She has interned at Indigo Arts Alliance and The Truro Center for the Arts at Castle Hill. She is continuing her creative path 
          while apprenticing with Steve and Matthew Kemp at Kemp Pottery in Orleans, MA.</p>
        <p>Alejandra Cuadra Sanchez is a proud Latina, a citizen of the world and most importantly a human being. Through creativity, communication, collaboration, 
          and community, she discovers the connectivity, empathy, and hope that transcends barriers.</p>
      </div>
    </div>
  )
}

export default About
