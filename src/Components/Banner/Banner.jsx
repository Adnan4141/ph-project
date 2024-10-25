import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types'

const Banner = ({handleClaimFreeCredit}) => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat rounded-3xl md:w-full h-full md:h-[35.5rem] mb-10 opacity-90"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/rMy7Kbx/cartoon-character-playing-cricket-game-field.jpg)",
        }}
      >
        <div className="w-9/12 pb-24 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6">
          <h1
            className="font-bold text-black
                md:text-[2.15rem] mt-5"
          >
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-xs md:text-xl text-black font-semibold ">
            Beyond Boundaries Beyond Limits
          </p>
          <div className="border-[#E7FE29] border-2 rounded-full p-2">
            <button onClick={handleClaimFreeCredit}
             className="btn bg-[#E7FE29] rounded-full border text-xl font-bold hover:bg-[#E7FE29]">
              Claim Free Credit
            </button>
            <ToastContainer 
            position={"top-center"}
            pauseOnHover={false}
            pauseOnFocusLoss={false}
            ></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes={
  handleClaimFreeCredit: PropTypes.func
}

export default Banner;
