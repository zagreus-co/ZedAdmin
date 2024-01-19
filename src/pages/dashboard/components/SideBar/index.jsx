import React, { useState } from "react";
import GradientShape from "./GradientShape";
import CategoryTitle from "./CategoryTitle";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiTestTubes } from "react-icons/gi";

const SideBar = ({ menuSize = false, setMenuSize = null }) => {
  // brand's name
  const brandName = <>ZedAdmin</>;

  // Nav links styles
  const navStyles =
    " py-3 px-5 rounded-xl border border-transparent flex items-center font-semibold text-[16.5px] gap-x-2 text-[var(--fallback-bc,oklch(var(--bc)/.7))] transition-all ease-in-out duration-300";
  const activeNavStyles = ` ${
    !menuSize
      ? " border-[var(--fallback-b1,oklch(var(--b1)/0.2))]"
      : "!bg-transparent"
  }   text-primary bg-[var(--fallback-b1,oklch(var(--b1)/1))]`;

  return (
    <aside
      className={`sidebar h-screen fixed left-0 top-0 bottom-0 ${
        menuSize && "!w-[100px] sidebar-closed"
      } w-[350px] z-[99] overflow-hidden transition-all ease-in-out duration-300`}
    >
      <div className=" relative z-[99] h-screen border-r-2 border-secondary-content border-opacity-15 py-5">
        <div className="flex justify-between items-center px-5">
          <h1 className="text-2xl font-extrabold delay-100 duration-200">
            {brandName}
            <span className="text-primary">.</span>
          </h1>
          <button
            type="button"
            className={`${
              menuSize && "rotate-[180deg]"
            } absolute right-[33px] transition-all ease-in-out duration-300`}
            onClick={() => {
              setMenuSize(!menuSize);
            }}
          >
            <svg
              className="w-[25px] h-auto "
              width="36"
              height="34"
              viewBox="0 0 36 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.5"
                y="1.5"
                width="33"
                height="31"
                rx="8.5"
                stroke="#585656"
                strokeWidth="3"
                className="stroke-[var(--fallback-bc,oklch(var(--bc)/1))]"
              />
              <line
                x1="10.5"
                y1="1"
                x2="10.5"
                y2="34"
                stroke="#585656"
                strokeWidth="3"
                className="stroke-[var(--fallback-bc,oklch(var(--bc)/1))]"
              />
              <path
                d="M18.2724 16.5369L23.5364 11.2729C23.9002 10.909 24.4885 10.909 24.8485 11.2729L25.7233 12.1476C26.0871 12.5115 26.0871 13.0998 25.7233 13.4598L21.9959 17.1949L25.7271 20.9261C26.091 21.2899 26.091 21.8783 25.7271 22.2382L24.8524 23.1168C24.4885 23.4807 23.9002 23.4807 23.5402 23.1168L18.2763 17.8529C17.9086 17.489 17.9086 16.9007 18.2724 16.5369Z"
                fill="#585656"
                className="fill-[var(--fallback-bc,oklch(var(--bc)/1))]"
              />
            </svg>
          </button>
        </div>

        <div className="px-5 space-y-20 mt-8 h-[calc(100vh_-_250px)] mb-auto overflow-x-hidden overflow-y-auto">
          <div>
            <CategoryTitle title={"main"} />
            <ul className="grid grid-col-1 gap-y-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? `${navStyles}`
                      : isActive
                      ? `${navStyles} ${activeNavStyles}`
                      : `${navStyles}`
                  }
                  end
                >
                  <LuLayoutDashboard className="text-[22px]" />
                  <span className="text-[var(--fallback-bc,oklch(var(--bc)/.8))]">
                    Dashboard
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/test"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? `${navStyles}`
                      : isActive
                      ? `${navStyles} ${activeNavStyles}`
                      : `${navStyles}`
                  }
                  end
                >
                  <GiTestTubes className="text-[22px]" />
                  <span className="text-[var(--fallback-bc,oklch(var(--bc)/.8))]">
                    Test
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`fixed bottom-3 left-0  ${
            menuSize && "!w-[90px]"
          } w-[350px] overflow-hidden transition-all ease-in-out duration-300 px-5 z-99`}
        >
          <div
            className={` rounded-xl p-3 gap-4 items-center w-[310px] whitespace-nowrap overflow-hidden ${
              menuSize
                ? "!w-[65px]"
                : "bg-[var(--fallback-b1,oklch(var(--b1)/1))]"
            }  transition-all ease-in-out duration-300`}
          >
            <div className="inline-block align-middle">
              <img
                src="/images/profile.jpg"
                className="w-[40px] h-[40px] rounded-full object-cover"
                alt=""
              />
            </div>
            <div className="inline-block align-middle ml-4">
              <b className="block text-lg">Salar SR</b>
              <span className="text-[var(--fallback-bc,oklch(var(--bc)/.7))]">
                salar@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      <GradientShape />
    </aside>
  );
};

export default SideBar;
