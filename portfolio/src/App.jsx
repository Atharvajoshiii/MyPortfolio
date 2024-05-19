import React , {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Aboutme from './screens/aboutme/Aboutme'
import Social from './components/social/Social'
import Projects from './screens/projects/Projects'
import ExperienceCard from './components/experiencecard/ExperienceCard'
import UITemplates from './screens/UITemplate/UITemplate'
import MobileDev from './screens/MobileDev/MobileDev'
import DSAProjects from './screens/DSAProjects/DSAProjects'
import Translator from './screens/texttranslator/Translator';
import Contact from './screens/contact/Contact';
import NotFound from './screens/NotFound/NotFound';

import './App.css'

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleNetworkChange() {
      setIsOnline(navigator.onLine);
    }

    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);

    return () => {
      window.removeEventListener('online', handleNetworkChange);
      window.removeEventListener('offline', handleNetworkChange);
    };
  }, []);

  if (!isOnline) {
    return <NotFound />;
  }
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar/>
              <Intro/>
              <Aboutme/>
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/mobile-dev" element={
            <>
              <Navbar/>
              <MobileDev />
            </>
          } />
          <Route path="/ui-templates" element={
            <>
              <Navbar/>
              <UITemplates />
            </>
          } />
          <Route path="/dsa-projects" element={
            <>
              <Navbar/>
              <DSAProjects />
            </>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App