import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route, Link
} from "react-router-dom";
import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

import img from './assets/homepage.svg';
import aimg from './assets/aboutpage.svg';
import wdev from './assets/webdev.jpeg';
import adev from './assets/appdev.jpg';
import sdev from './assets/softdev.png';
import digital from './assets/digital.png';
import android from './assets/android.png';
import seo from './assets/seo.jpg';

function App() {
  const datas = [
    {
      img: wdev,
      title: 'Web Development',
    },
    {
      img: adev,
      title: 'App Development',
    },
    {
      img: sdev,
      title: 'Software Development',
    },
    {
      img: digital,
      title: 'Digital Marketing',
    },
    {
      img: android,
      title: 'Android Development',
    },
    {
      img: seo,
      title: 'SEO Expert',
    },
  ]
  const [mode, setMode] = useState('white');
  const changeMode = () => {
    if (mode === 'white') {
      setMode('black');
      document.getElementsByClassName('twenty-four-px')[0].classList.remove('gray');
      document.getElementsByClassName('twenty-four-px')[0].classList.add('yellow');
      document.getElementsByTagName('body')[0].style = 'background-color:#555556;color:white;fill:white;';
      document.getElementsByClassName('twenty-four-px')[0].innerHTML = '<path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"></path>';
      let b = document.getElementsByClassName('bar');
      for (let i = 0; i < b.length; i++) {
        b[i].style = 'background-color:white;';
      }
    }
    else {
      setMode('white');
      document.getElementsByClassName('twenty-four-px')[0].classList.remove('yellow');
      document.getElementsByClassName('twenty-four-px')[0].classList.add('gray');
      document.getElementsByTagName('body')[0].style = 'background-color:rgba(244,238,238,.571);color:black;fill:black;';
      document.getElementsByClassName('twenty-four-px')[0].innerHTML = '<path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path><path d="M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"></path>';
      let b = document.getElementsByClassName('bar');
      for (let i = 0; i < b.length; i++) {
        b[i].style = 'background-color:black;';
      }
    }
  }
  return (
    <div>
      <BrowserRouter>
        <NavBar mode={mode} changeMode={changeMode} />
        <Routes>
          <Route path='/' element={<Home img={img} />} />
          <Route path='/about' element={<About img={aimg} mode={mode} />} />
          <Route path='/services' element={<Services datas={datas} />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
