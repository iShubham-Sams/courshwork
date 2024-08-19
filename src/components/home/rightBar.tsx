import { EventIcon, FireIcon, NoteStackIcon } from "@/lib/icon";

const RightBar = () => {
  return (
    <div className=" hidden sm:flex sm:flex-col sm:items-end sm:p-2 sm:gap-4">
      <div className="flex items-center bg-white  p-1 rounded-3xl gap-2">
        <div className="bg-[radial-gradient(circle,_#FFC657,_#FFBA36)]  rounded-full h-6 w-6 flex justify-center items-center">
          <div className="bg-[radial-gradient(circle,_#FFCC9D,_#F29100)] h-4 w-4 rounded-full flex justify-center items-center">
            <span className="text-[8px]">Zu</span>
          </div>
        </div>
        <span className="text-[12px] font-bold">120</span>
      </div>
      <div className="flex items-center bg-white  p-1 rounded-3xl gap-2">
        <FireIcon size={1.3} />
        <span className="text-[12px] font-bold">24</span>
      </div>
      <div className="flex items-center bg-white/80  p-1 rounded-full">
        <div className="rounded-full p-2 bg-white border-2 border-bgPrimary flex justify-center items-center">
          <NoteStackIcon color="black" size={0.8} />
        </div>
      </div>
      <div className="flex items-center bg-white/80  p-1 rounded-full">
        <div className="rounded-full p-2 bg-white border-2 border-bgPrimary flex justify-center items-center">
          <EventIcon color="black" size={0.8} />
        </div>
      </div>
    </div>
  );
};

export default RightBar;
