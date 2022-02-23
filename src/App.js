import React, {useState} from 'react';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';
import './App.css';
import { Custom } from './components/Custom'

function App() {

  let [url, setUrl] = useState("");

  return (
    <div className="App">
      <center><h1>Demo Player</h1></center>
      <div className='container'><ShakaPlayer autoPlay src={url} /></div>
      <Custom url={url} setUrl={setUrl} ></Custom>
    </div>
  );
}

export default App;
