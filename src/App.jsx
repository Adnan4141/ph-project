import Available from "./Components/Available/Available";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import Players from "./Components/Players/Players";
import { data } from "autoprefixer";
import Footer from "./Components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Selected from "./Components/Selected/Selected";

function App() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);


  const [isActive, setIsActive] = useState({
    avail: true,
    status: "avail",
  });

  const [claimFreeCredit, setClaimFreeCredit] = useState(0);

  const [showAvailable, setShowAvailable] = useState(true);
  const handelIsActiveState = (status) => {
   
    if (status === "avail") {
      setIsActive({
        avail: true,
        status: "avail",
      });
    } else {
      setIsActive({
        avail: false,
        status: "select",
      });
    }

  };

  console.log(selectedPlayers)
  const handleClaimFreeCredit = () => {
    setClaimFreeCredit(claimFreeCredit + 10000000);
    toast.success("Congratulation Free Coin Added Successfully");
  };

  const handleSelectPlayer = (newPlayer)=>{
     const isSelected = selectedPlayers.some(singlePlayer=> singlePlayer.playerId === newPlayer.playerId)
     console.log(isSelected)
     if(isSelected){
        alert("Sorry.Already added the player")
        return 
      } 
      alert("Successfully Selected Player")
    setSelectedPlayers((prevSelected)=>[...prevSelected,newPlayer])
}
  const handleDeletePlayer = (id)=>{
     const currentPlayer = selectedPlayers.filter(singlePlayer=> singlePlayer.playerId !== id)
  
      alert("Successfully Deleted Player")
      setSelectedPlayers(currentPlayer)
}


  return (
    <>
      <section className="max-w-screen-2xl mx-auto">
        <Header claimFreeCredit={claimFreeCredit}
        ></Header>

        <Banner
        handleClaimFreeCredit={handleClaimFreeCredit}></Banner>

        <Available setShowAvailable={setShowAvailable}
          showAvailable={showAvailable}
          selectedPlayers={selectedPlayers}
          handelIsActiveState={handelIsActiveState}
          isActive={isActive}
        ></Available>

         {   showAvailable &&
        <div className="grid flex-col md:grid-cols-2 lg:grid-cols-3 gap-10 mb-[300px]">
          {  players.map((player) => (
              <Players key={player.playerId}
              handleSelectPlayer={handleSelectPlayer}
              player={player}
              ></Players>

            ))}
        </div>
            }

        {/* <Selected players={players}
        showAvailable={showAvailable}></Selected> */}
       {  !showAvailable &&
          <div className="bg-red-400 mt-14 mb-32">
          { 
            selectedPlayers.map((player, idx) => (
              <Selected key={idx} 
              player={player}
              handleDeletePlayer={handleDeletePlayer}
              showAvailable={showAvailable}
              ></Selected>
            ))
          }
        </div>
       }
      </section>



      <Footer></Footer>
    </>
  );
}

export default App;
