import { Link } from "react-router-dom";
import Jillur from '../assets/jillur.jpg'
const Navbar = () => {
  return (
    <>
      <nav className="h-16 container bg-green-500 flex justify-end items-center shadow-md">
        <ul className="flex gap-6 m-4 font-semibold text-black">
          <li className="hover:bg-green-700 p-2 rounded-md transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-green-700 p-2 rounded-md transition duration-300">
            <Link to="/sheba">Care</Link>
          </li>
          <li className="hover:bg-green-700 p-2 rounded-md transition duration-300">
            <Link to="/patient">Patient</Link>
          </li>
          <li className="hover:bg-green-700 p-2 rounded-md transition duration-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:bg-green-700 p-2 rounded-md transition duration-300">
            <Link to="/report">Report</Link>
          </li>
          <li className="hover:bg-green-700 p-2 rounded-md transition duration-300">
            <Link to="/intern">Internship Care</Link>
          </li>
          <div className="h-auto">
            <span><img src={Jillur} alt="" className="h-10 border rounded-full cursor-pointer" /></span>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
