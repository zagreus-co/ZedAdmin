import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full ">
      <ScaleLoader color="oklch(var(--p))" size={60} />
    </div>
  );
};

export default Loading;
