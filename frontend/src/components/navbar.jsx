import { useState } from 'react';

const Header = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/login" }, // Changed link to '/service'
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* Logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          {/* Add your logo icon here */}
          <span className='text-red-500 z-0'>BloodFinder</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? "X" : "≡"} {/* Use placeholder text for icons */}
        </div>
        {/* Link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-4 md:my-0 my-7 flex items-center justify-center">
              <a href={link.link} className="text-gray-800 hover:text-red-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
          <li className="md:ml-4 md:my-0 my-7 flex items-center justify-center">
            <a href="/login" className="text-gray-800 hover:text-red-400 underline duration-500">
              Login
            </a>
          </li>
          <button className="btn bg-red-600 text-white md:ml-4 md:my-0 my-7 flex items-center justify-center px-3 py-1 rounded duration-500 md:static">
            Sign Up
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
