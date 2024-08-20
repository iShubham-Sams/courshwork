import Spinner from "./spinner";

const LoadingScreen = () => {
  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 h-screen w-screen bg-[#f5f5f5] bg-opacity-50 flex justify-center items-center 
     z-40">
      <Spinner />
    </div>
  );
};

export default LoadingScreen;
