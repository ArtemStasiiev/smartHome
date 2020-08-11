import React, {useState} from 'react';
import '../App.css';
import Switch from 'react-input-switch';
import { FaUnlockAlt } from 'react-icons/fa';
import { FaDoorOpen } from 'react-icons/fa';
import { FaDoorClosed } from 'react-icons/fa';

function Bedroom() {
  const [toggle, setToggle] = useState(false);

  const toggleRememberPin = (value) => {
    setToggle(value);
};

  return (
    <div className="App">
      <h1 className="heading">Door lock</h1>
      <div className="bedroomCon">
        <div className="bedroomConInside">
          <div className="bedroomConInsideLeft">
            <FaUnlockAlt className="lockIcon"/>
          </div>
          <div className="bedroomConInsideRight">
            <div className="doorOpen">
              <FaDoorOpen className="doorOpenIcon"/>
            </div>
            <div className="switchCon">
              <Switch 
                className="react-input-switch"
                onChange={toggleRememberPin}
                value={toggle}/>
            </div>
            <div className="doorClosed">
              <FaDoorClosed className="doorClosedIcon"/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Bedroom;