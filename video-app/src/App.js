import React, {useRef} from 'react';
import './App.css';
import video from './assets/video.mp4';

function App() {

  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }

  return (
    <div>
      <video className="video" ref={videoRef} height={600} controls>
        <source src={video} type="video/mp4" />
      </video>
      <br />
      <button className="custom-button" onClick={playVideo}>Play</button> 
      <button className="custom-button" onClick={pauseVideo}>Pause</button>
    </div>
  );
}

export default App;
