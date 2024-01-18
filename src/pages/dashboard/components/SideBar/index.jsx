import React from "react";

const SideBar = () => {
  return (
    <aside className=" h-screen fixed left-0 top-0 bottom-0 w-[350px] z-[99] overflow-hidden">
      <div className=" relative z-[99] h-screen border-r-2 border-secondary-content border-opacity-20">
        this is a test
      </div>

      <div className="accent-content bg-accent-content bg-opacity-[.01] h-screen absolute inset-0 z-10 backdrop-blur-[00px]"></div>
      <div className="absolute -left-0 bottom-[10px] w-[200px] h-[200px] rounded-r-full bg-opacity-15 rounded-ful bg-accent blur-[150px]"></div>
      <div className="absolute -left-0 bottom-[330px] w-[200px] h-[348px] scale-y-150 rounded-r-full bg-opacity-10 rounded-ful bg-secondary blur-[150px]"></div>
      <div className="absolute -left-0 bottom-[740px] w-[200px] h-[450px] rounded-r-full bg-opacity-15 rounded-ful bg-primary blur-[150px]"></div>
    </aside>
  );
};

export default SideBar;
