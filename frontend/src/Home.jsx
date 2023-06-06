import React from 'react';
import './home.css';
import Card from './Card';

function Home() {
  return (
    <div className='home'>
      <div className='navbar'>
          <div className='navbar__logo'>
            <span className='logo__alejandra'>ALEJANDRA</span><span className='logo__cuadra'>CUADRA</span>
          </div>
      </div>
      <h3><em>A Persistent and Sensitive Human, Maker, Dreamer and Believer</em></h3>
      <div className='home__cards'>
        <a href='/installation'>
          <Card
              title='Installation'
              imgURL={require('./assets/pictures.jpg')}
              description='In At a Cross Roads, Sitting on Uncertainty, Redefining Identity,  I used the documents that DACA recipients will have to fill out every two years, with one of my documents. I am adorned by a headpiece inspired by Incan culture,  where the Cantuta flower was used in the Warachicuy, the great ritual of coming of age.  The flowers adorned the foreheads of the youth who underwent tests of bravery and physical resistance in order to pass into adulthood and become considered warriors.) I used this headpiece as a representation of the Resistance, resilience, and determination to overcome the fear that DACA recipients undergo. '
              >
          </Card>
        </a>
        <a href='/allegories'>
          <Card
              title='Allegories'
              imgURL={require('./assets/heads.jpeg')}
              description='In At a Cross Roads, Sitting on Uncertainty, Redefining Identity,  I used the documents that DACA recipients will have to fill out every two years, with one of my documents. I am adorned by a headpiece inspired by Incan culture,  where the Cantuta flower was used in the Warachicuy, the great ritual of coming of age.  The flowers adorned the foreheads of the youth who underwent tests of bravery and physical resistance in order to pass into adulthood and become considered warriors.) I used this headpiece as a representation of the Resistance, resilience, and determination to overcome the fear that DACA recipients undergo. '
              >
          </Card>
        </a>
        <a href='/vessels'>
          <Card
              title='Vessels'
              imgURL={require('./assets/figure.jpeg')}
              description='In At a Cross Roads, Sitting on Uncertainty, Redefining Identity,  I used the documents that DACA recipients will have to fill out every two years, with one of my documents. I am adorned by a headpiece inspired by Incan culture,  where the Cantuta flower was used in the Warachicuy, the great ritual of coming of age.  The flowers adorned the foreheads of the youth who underwent tests of bravery and physical resistance in order to pass into adulthood and become considered warriors.) I used this headpiece as a representation of the Resistance, resilience, and determination to overcome the fear that DACA recipients undergo. '
              >
          </Card>
        </a>
        <a href='/public-engagement'>
          <Card
              title='Public Engagement'
              imgURL={require('./assets/public.png')}
              description='In At a Cross Roads, Sitting on Uncertainty, Redefining Identity,  I used the documents that DACA recipients will have to fill out every two years, with one of my documents. I am adorned by a headpiece inspired by Incan culture,  where the Cantuta flower was used in the Warachicuy, the great ritual of coming of age.  The flowers adorned the foreheads of the youth who underwent tests of bravery and physical resistance in order to pass into adulthood and become considered warriors.) I used this headpiece as a representation of the Resistance, resilience, and determination to overcome the fear that DACA recipients undergo. '
              >
          </Card>
        </a>
        <a href='/about-me'>
          <Card
              title='About Me'
              imgURL={require('./assets/alejandra.jpg')}
              description='In At a Cross Roads, Sitting on Uncertainty, Redefining Identity,  I used the documents that DACA recipients will have to fill out every two years, with one of my documents. I am adorned by a headpiece inspired by Incan culture,  where the Cantuta flower was used in the Warachicuy, the great ritual of coming of age.  The flowers adorned the foreheads of the youth who underwent tests of bravery and physical resistance in order to pass into adulthood and become considered warriors.) I used this headpiece as a representation of the Resistance, resilience, and determination to overcome the fear that DACA recipients undergo. '
              >
          </Card>
        </a>
      </div>
    </div>
  )
}

export default Home
