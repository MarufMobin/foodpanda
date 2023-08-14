import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>test</h1>
      <Outlet />
      <h2>test2</h2>
    </div>
  );
};

export default Main;
