import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="py-10 container">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}
