import { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import PropTypes from 'prop-types'

const Players = ({player,handleSelectPlayer}) => {
  const {image, name, country, role, battingType, bowlingType, biddingPrice} = player;
   
   
  return (
    <div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={image}
              alt="Player image"
              className="rounded-xl w-[376px] h-[240px]"
            />
          </figure>
          <div className="flex items-center text-center gap-3 ml-10 mt-5 text-2xl">
          <RxAvatar /><h2 className="card-title">{name}</h2>
          </div>
          <div className="ml-10 text-center items-center my-2 flex justify-between mb-5">
            <p className="text-base font-bold">{country}</p>
            <button className="btn mr-10">{role}</button>
          </div>
          <hr />
          <div className="flex justify-between text-center items-center py-5 text-base font-light">
            <p className="ml-10">{battingType}</p>
            <p className="mr-10">{bowlingType}</p>
          </div>
          <div className="ml-10 text-center items-center flex justify-between mb-5">
            <p className="text-base font-bold">Price: $ {biddingPrice}</p>
            <button onClick={()=>handleSelectPlayer(player)} className="btn mr-10 hover:bg-[#E7FE29]">Choose Player</button>
          </div>
        </div>
    </div>
  );
};

Players.propTypes={
  player: PropTypes.object.isRequired,
}

export default Players;
