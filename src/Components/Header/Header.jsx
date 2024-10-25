import PropTypes from 'prop-types'

const Header = ({claimFreeCredit}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center my-8 space-y-4 mt-10">
      <img
        className="md:w-ful md:h-full items-center"
        src="../../../public/assets/logo.png"
        alt="logo"
      />
      <div>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <ul
            className="flex gap-2 md:gap-5 font-medium text-base text-gray-600
            "
          >
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
          <button className="btn text-xl text-[#131313B3] font-bold">
            {" "}
            {claimFreeCredit} Coin
            <img
              className="ml-2"
              src="../../../public/assets/coin.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

Header.propTypes={
  claimFreeCredit: PropTypes.number
}

export default Header;
