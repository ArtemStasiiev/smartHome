import React, {useState} from 'react';
import '../App.css';
import { FaFan } from 'react-icons/fa';
import { FaThermometerEmpty } from 'react-icons/fa';
import { FaThermometerFull } from 'react-icons/fa';

function LivingRoom() {
const[value, setValue] = useState(0)

const handleChange = e => {
  setValue(e.target.value)
}

  return (
    <div className="App">
      <h1 className="heading">Air conditioner</h1>
      <div className="livingRoomCon">
        <div className="livingRoomConInside">
          <div className="livingRoomConInsideLeft">
            <FaFan className="fan"/>
          </div>
            <div className="temperatureCon">
              <h1 className="heading">Temperature:</h1>
              <div className="tempDisplay">{value}</div>
            </div>
          <div className="livingRoomConInsideRight">
            <div className="conditionerRangeCon">
              <div className="conditionerRangeConUp">
                <FaThermometerEmpty className="lowTemp"/>
                <FaThermometerFull className="highTemp"/>
              </div>
              <div className="conditionerRangeConDown">
                <input 
                  type="range" 
                  min="0"
                  max="30"
                  value={value}
                  onChange={handleChange}
                  className="conditionareRange"/>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default LivingRoom;