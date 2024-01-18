import React from "react";
import GradientShape from "./GradientShape";
import CategoryTitle from "./CategoryTitle";

const SideBar = () => {
  const brandName = <>ZedAdmin</>;

  return (
    <aside className=" h-screen fixed left-0 top-0 bottom-0 w-[350px] z-[99] overflow-hidden">
      <div className=" relative z-[99] h-screen border-r-2 border-secondary-content border-opacity-15 p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-extrabold">
            {brandName}
            <span className="text-primary">.</span>
          </h1>
          <button type="button">
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

        <ul>
          <li>
            <CategoryTitle title={"main"} />
          </li>
        </ul>
      </div>

      <GradientShape />
    </aside>
  );
};

export default SideBar;
