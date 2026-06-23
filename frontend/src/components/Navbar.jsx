import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaCartShopping, FaUser } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto">
        <div className="navbar px-0 min-h-16">
          {/* Logo */}
          <div className="flex-1">
            <Link
              to="/"
              className="flex items-center gap-3 hover:opacity-90 transition"
            >
              <div className="bg-primary p-2 rounded-lg">
                <img
                  src={logo}
                  alt="ProShop Logo"
                  className="h-8 w-8 object-contain"
                />
              </div>

              <h2 className="text-2xl font-bold text-primary">ProShop</h2>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <form className="hidden md:flex items-center gap-1">
              <input
                type="text"
                placeholder="Search products..."
                className="input input-bordered h-10 w-56 rounded-r-none"
              />

              <button
                type="submit"
                className="btn btn-border-reveal h-10 rounded-l-none px-5"
              >
                Search
              </button>
            </form>

            {/* Cart */}
            <Link
              to="/cart"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <FaCartShopping size={18} />
              <span className="hidden sm:inline">Cart</span>
            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <FaUser size={18} />
              <span className="hidden sm:inline">Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
