import { appleImg, searchImg, bagImg } from '../utils';
import { navLists } from '../constants'; // fixed this error

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple Logo" width={14} height={18} />
      </nav>

      <div className="flex flex-1 justify-center max-sm:hidden">
        {navLists.map((nav, index) => (
          <div
            key={index}
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
          >
            {nav}
          </div>
        ))}

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img
            src={searchImg}
            alt="Search Icon"
            width={18}
            height={18}
            aria-label="Search"
          />
          <img
            src={bagImg}
            alt="Bag Icon"
            width={18}
            height={18}
            aria-label="Shopping Bag"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
