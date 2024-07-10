import React from 'react';
import './App.css';
import FileDownloadForm from './Form/FileDownloadForm'; 
import Header from './Header/Header';
import Footer from  './Footer/Footer';
import background from './Assets/background.mp4';
import { useEffect, useRef } from 'react';


function App() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9; // Set the playback speed here
    }
  }, []);
  
  return (
    <div className="App">
    <div className="video-background">
    <video ref={videoRef} className="video-tag" autoPlay loop muted>  
      <source src={background} type="video/mp4" />
    </video>
          <Header/>
          <FileDownloadForm /> 
          <Footer/>
    </div>
    </div>
  );
}

export default App;




