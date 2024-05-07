import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  const navigate = useNavigate();
  async function Remove() {
    try {
      console.log(blog.id);
      const response = await fetch(`${BACKEND_URL}/api/v1/blog/${blog.id}`, {
        method: "DELETE",
        headers: {
          authorization: localStorage.getItem("token") ?? "",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        navigate("/blogs");
        alert("blog deleted!");
      } else {
        const message = response.ok;
        alert(message);
      }
    } catch (e) {
      console.log(e);
      alert("cann");
    }
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 px-12 pt-10">
        <div className="grid col-span-8 ">
          <div className="text-3xl font-extrabold">{blog.title}</div>
          <div className="text-slate-500 font-semibold pt-2">
            Published on 24th June
          </div>
          <div className="pt-4 text-xl">{blog.content}</div>
          <button onClick={Remove} className="flex justify-end mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 flex justify-center flex-col mt-1.5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>

        <div className="grid col-span-4 ml-10">
          <div>
            <div className="text-slate-500">Author</div>
            <div className=""></div>
            <div className="flex mt-3 mb-3">
              <div className="flex justify-center flex-col">
                <Avatar name={blog.author.name || "Anonymous"} size="big" />
              </div>
              <div className="text-2xl font-bold pl-2">{blog.author.name}</div>
            </div>
            <div className="text-slate-400">
              A phrase about author to seek attention. I am the fastest man
              alive!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
