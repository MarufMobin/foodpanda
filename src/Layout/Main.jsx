import { Outlet } from "react-router-dom";
import Footer from "../componments/home/Footer";
import Instruciton from "../componments/home/Instruciton";

const Main = () => {
  return (
    <div>
      <h1>test</h1>
      <Outlet />
      <Instruciton />
      <Footer />
    </div>
  );
};

export default Main;
