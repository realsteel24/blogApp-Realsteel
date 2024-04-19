export const BlogSkeleton = () => {
  return (
    <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md">
      <div className="flex">
        <div className="h-2.5 bg-gray-200 rounded-full  w-full mb-4"></div>
        <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
          <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
        </div>
        <div className="pl-2 text-xs flex justify-center flex-col text-gray-400">
          &#9679;
        </div>
        <div className="font-thin pl-2 text-slate-500 text-sm flex justify-center flex-col">
          <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
        </div>
      </div>
      <div className="font-semibold text-xl pt-2">
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
      </div>
      <div className="font-thin text-md">
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
      </div>
      <div className="text-slate-500 text-sm font-thin pt-4 flex justify-between">
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
      </div>{" "}
    </div>
  );
};
