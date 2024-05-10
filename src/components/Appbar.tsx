import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";
import image from "../assets/Blog-logo.png";

export const Appbar = () => {
  const username = localStorage.getItem("name") ?? "Anonymous";
  const id = localStorage.getItem("id");

  const navigate = useNavigate();
  return (
    <div className="border-b flex justify-between px-4 md:px-10 py-3">
      <Link to={"/blogs"}>
        <div className="flex justify-center flex-col text-xl font-semibold">
          <div className="flex justify-center">
            <img src={image} className="w-10 h-10" />
            <div className="flex justify-center flex-col">Medium</div>
          </div>
        </div>
      </Link>
      <div className="flex mb-2">
        <Link to={`/publish`}>
          <button
            type="button"
            className="flex justify-center flex-col text-white bg-gray-800 hidden md:block focus:outline-none focus:ring-2 focus:ring-white-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mr-8"
          >
            Create Blog
          </button>
        </Link>
        <Link to={`/publish`}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 md:hidden mr-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
        </Link>
        <button
          onClick={() => {
            navigate(`/profile/${id}`);
          }}
        >
          <div className="flex justify-center flex-col">
            <Avatar name={username} size="big" />
          </div>
        </button>
      </div>
    </div>
  );
};
