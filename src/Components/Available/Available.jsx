import { useState } from 'react';
import Players from '../Players/Players';
import Selected from '../Selected/Selected';
import './Available.css'
import PropTypes from 'prop-types'

const Available = ({selectedPlayers,showAvailable,handelIsActiveState, isActive, setShowAvailable}) => {
 
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
        
      <h1 className="text-2xl font-bold">Available Players</h1>
      <div className="ml-16 space-y-4">
        <button onClick={() => {
          handelIsActiveState("avail");
          setShowAvailable(!showAvailable);
        }}
        className={`btn w-[190px] h-[50px] rounded-full border text-xl font-bold 
        ${isActive.avail? "btn active" : 'btn cursor-pointer'}`}>
          Available
        </button>

        <button onClick={() => {
          handelIsActiveState("select");
          setShowAvailable();
        }}
        className={`btn w-[190px] h-[50px] rounded-full border text-xl font-bold 
        ${isActive.avail? "btn cursor-pointer" : 'btn active'}`}>
          Selected ({selectedPlayers?.length>0?selectedPlayers.length :0})
        </button>
      </div>
        {/* {
            isActive.avail? <Players></Players> : <Selected></Selected>
        } */}

    </div>
  );
};

Available.propTypes={
    handelIsActiveState: PropTypes.func,
    isActive: PropTypes.object,
    setShowAvailable: PropTypes.object
}

export default Available;
