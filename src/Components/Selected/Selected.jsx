import PropTypes from "prop-types";

const Selected = ({ player,handleDeletePlayer, showAvailable }) => {
  const { image, name,role } = player;
  console.log(showAvailable);
  console.log(player);
  return (
    <div className="bg-slate-600 ">
      <div className=" p-5 flex justify-between w-full">
        <div className="flex gap-3">
        <img className="w-20 h-20" src={image} alt="" />
         <div>
          <h3>{name}</h3>
           <p>{role}</p>
        </div>
        </div>

        <div className="p-5">
          <button onClick={()=>handleDeletePlayer(player.playerId)} className="btn">Delete</button>
        </div>
      </div>

      
    </div>
  );
};

Selected.propTypes = {
  player: PropTypes.object,
  showAvailable: PropTypes.func,
};

export default Selected;
