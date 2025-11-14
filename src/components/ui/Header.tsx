import Navbar from './Navbar/Navbar';

/**
 * Holds the navbar.
 * @constructor
 */
const Header = () => {
  return (
    <div className="sm:col-[1/4] md:col-[1/13]">
      <Navbar />
    </div>
  );
};

export default Header;
