import React from "react";

const GradientShape = () => {
  return (
    <>
      <div className="accent-content bg-accent-content bg-opacity-[.01] h-screen absolute inset-0 z-10 backdrop-blur-[500px]"></div>
      <div className="absolute -left-0 bottom-[10px] w-[400px] h-[200px] rounded-r-full bg-opacity-[.05] rounded-ful bg-accent blur-[150px]"></div>
      <div className="absolute -left-0 bottom-[330px] w-[400px] h-[348px] scale-y-150 rounded-r-full bg-opacity-[.05] rounded-ful bg-secondary blur-[150px]"></div>
      <div className="absolute -left-0 bottom-[740px] w-[400px] h-[450px] rounded-r-full bg-opacity-[.05] rounded-ful bg-primary blur-[150px]"></div>
    </>
  );
};

export default GradientShape;
