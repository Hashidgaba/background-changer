import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('whitesomoke');

  return (
    <div className="App" style={{backgroundColor: color}}>
      <h2>Welcome to my React app</h2>
      <div className='bg-cont'>
        <button onClick={() => setColor("Yellow")} className='btn-1' style={{ backgroundColor: 'yellow' }}>Yellow</button>
        <button onClick={() => setColor("Green")} className='btn-1' style={{ backgroundColor: 'Green' }}>Green</button>
        <button onClick={() => setColor("orange")} className='btn-1' style={{ backgroundColor: 'orange' }}>orange</button>
        <button onClick={() => setColor("red")} className='btn-1' style={{ backgroundColor: 'red' }}>Red</button>
        <button onClick={() => setColor("purple")} className='btn-1' style={{ backgroundColor: 'purple' }}>Purple</button>
        <button  onClick={() => setColor("aqua")} className='btn-1' style={{ backgroundColor: 'aqua' }}>aqua</button>
        <button onClick={() => setColor("blue")} className='btn-1' style={{ backgroundColor: 'blue' }}>Blue</button>
      </div>
    </div>
  );
}

export default App;
