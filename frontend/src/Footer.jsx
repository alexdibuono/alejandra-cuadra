import React from 'react';
import './footer.css';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='copyrightIcon'>
      <CopyrightIcon fontSize='small'/>
      </div>
      <p>Copyright Alejandra Cuadra Sanchez</p>

    </div>
  )
}

export default Footer
