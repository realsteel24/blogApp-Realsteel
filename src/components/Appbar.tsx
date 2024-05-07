import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-3">
      <Link to={"/blogs"}>
        <div className="flex justify-center flex-col text-xl font-semibold">
          Medium
        </div>
      </Link>
      <div>
        <Link to={`/publish`}>
          <button
            type="button"
            className="text-white mr-4 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-white-200 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Publish
          </button>
        </Link>

        <Avatar name="Rohan" size="big" />
      </div>
    </div>
  );
};
