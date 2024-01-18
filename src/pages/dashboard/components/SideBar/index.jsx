import React from "react";
import GradientShape from "./GradientShape";

const SideBar = () => {
  return (
    <aside className=" h-screen fixed left-0 top-0 bottom-0 w-[350px] z-[99] overflow-hidden">
      <div className=" relative z-[99] h-screen border-r-2 border-secondary-content border-opacity-15">
        this is a test
      </div>

      <GradientShape />
    </aside>
  );
};

export default SideBar;
