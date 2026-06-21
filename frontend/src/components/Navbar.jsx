import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaCartShopping, FaUser } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="bg-gray-800 shadow-sm">
      <div className="container">
        <div className="navbar">
          <div className="flex-1">
            <Link to={"/"} className="flex items-center text-white">
              <img src={logo} alt="ProShop Logo" />
              <h2 className="text-2xl">ProShop</h2>
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <form className="flex gap-2">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>

            <div className="flex gap-4 items-center text-white">
              <div className="flex gap-1 items-center">
                <FaCartShopping></FaCartShopping>
                Cart
              </div>
              <Link to={"/login"} className="flex gap-1 items-center">
                <FaUser />
                Sign In
              </Link>
            </div>

            {/* <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
