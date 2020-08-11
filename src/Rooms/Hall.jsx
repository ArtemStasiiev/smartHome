import React, {useState} from 'react';
import '../App.css';
import { FaLightbulb } from 'react-icons/fa';

function Hall() {
  const [count, setCount] = useState(0);
  const handleChange = e => {
    setCount(e.target.value)
  }

  return (
    <div className="App">
        <h1 className="heading">Lamp</h1>
        <div className="hallCon">
          <div className="hallConInside">
            <div className="hallConInsideLeft">
              <FaLightbulb className="bulb" /> 
              <p className="bulbPercentage"> {count}%</p>
            </div>
            <div className="hallConInsideRight">
              <input 
                type="range" 
                min="0"
                max="100"
                value={count}
                onChange={handleChange}
                className="bulbRange"/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Hall;