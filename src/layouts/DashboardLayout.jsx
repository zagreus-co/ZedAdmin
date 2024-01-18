import { Outlet } from "react-router-dom";
import SideBar from "../pages/dashboard/components/SideBar";

const DashboardLayout = () => {
  return (
    <>
      <SideBar />

      <main className="ml-auto w-[calc(100%_-_350px)]">
        <header className={"p-4"}>Header</header>

        <section className="p-4">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default DashboardLayout;
