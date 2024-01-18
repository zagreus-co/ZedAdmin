import { Outlet } from "react-router-dom";
import SideBar from "../pages/dashboard/components/SideBar";

const DashboardLayout = () => {
  return (
    <>
      <SideBar />

      <div className="ml-auto w-[calc(100%_-_350px)]">
        <header className={"bg-accent p-4"}>this is a header</header>
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
