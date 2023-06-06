import React from 'react';
import './App.css';
import Footer from './Footer';
import Gallery from './Gallery';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Compose from './Compose';
import Artpage from './Artpage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

    return (
    <div className='app'>

      <Router>
        
        <Routes>

        <Route exact path="/" element={<><Home/></>}/>
        <Route exact path="/installation" element={<> <Navbar/> <Gallery header='Installation'/> </>} />
        <Route exact path="/allegories" element={<> <Navbar/> <Gallery header='Allegories'/> </>} />
        <Route exact path="/vessels" element={<> <Navbar/> <Gallery header='Vessels'/> </>} />
        <Route exact path="/public-engagement" element={<> <Navbar/> <Gallery header='Public Engagement'/> </>} />
        <Route exact path="/about-me" element={<> <Navbar/> <About header='Alejandra Cuadra'/> </>} />
        <Route exact path="/compose" element={<> <Navbar/> <Compose/> </>} />
        <Route path="/:category/:artwork/:id" element={<> <Navbar /> <Artpage /> </>} />

        </Routes>

        <Footer />

      </Router>

    </div>
  )
}

export default App

