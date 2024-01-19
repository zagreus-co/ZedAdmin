import { Outlet } from "react-router-dom";
import SideBar from "../pages/dashboard/components/SideBar";
import { useState } from "react";

const DashboardLayout = () => {
  const [menuSize, setMenuSize] = useState(false);

  return (
    <>
      <SideBar menuSize={menuSize} setMenuSize={setMenuSize} />

      <main
        className={`ml-auto ${
          menuSize && "!w-[calc(100%_-_100px)]"
        } w-[calc(100%_-_350px)] transition-all ease-in-out duration-300`}
      >
        <header className={"p-4"}>Header</header>

        <section className="p-4">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default DashboardLayout;
