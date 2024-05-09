import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  const username = localStorage.getItem("name") ?? "Anonymous";
  return (
    <div className="border-b flex justify-between px-4 md:px-10 py-3">
      <Link to={"/blogs"}>
        <div className="flex justify-center flex-col text-xl font-semibold">
          Medium
        </div>
      </Link>
      <div>
        <Link to={`/publish`}>
          <button
            type="button"
            className="text-white bg-black  focus:outline-none focus:ring-2 focus:ring-white-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mr-6"
          >
            Create Blog
          </button>
        </Link>

        <Avatar name={username} size="big" />
      </div>
    </div>
  );
};
