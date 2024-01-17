import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full ">
      <ScaleLoader color="#023782" size={60} />
    </div>
  );
};

export default Loading;
