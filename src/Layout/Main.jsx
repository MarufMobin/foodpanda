import { Outlet } from "react-router-dom";
import Footer from "../componments/home/Footer";

const Main = () => {
  return (
    <div>
      <h1>test</h1>
      <Outlet />

      <Footer />
    </div>
  );
};

export default Main;
