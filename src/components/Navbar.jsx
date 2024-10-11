import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="h-16 bg-green-500 flex justify-end items-center shadow-md">
        <ul className="flex gap-6 m-4 font-semibold text-black">
          <li className="hover:bg-green-700 p-2 rounded-md transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-green-700 p-2 rounded-md transition duration-300">
            <Link to="/doctor">Doctor</Link>
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
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
