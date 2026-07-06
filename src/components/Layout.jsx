import { Outlet } from "react-router-dom";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "./ScrollProgress";

const Layout = () => {
  return (
    <>
      <ScrollProgress />
      <Outlet />
    </>
  );
};

export default Layout;
