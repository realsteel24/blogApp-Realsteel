import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Blog, useComments } from "../hooks";
import { Avatar, BlogCard } from "./BlogCard";
import dateFormat from "dateformat";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  const navigate = useNavigate();
  const { comment } = useComments();

  const handleRemove = () => {
    try {
      removeBlog(blog.id);
      navigate("/blogs");
      alert("blog deleted!");
    } catch (e) {
      console.log(e);
      alert("cann");
    }
  };

  return (
    <div>
      <div className="flex justify-center lg:mx-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 px-12 lg:px-16 pt-10">
          <div className="grid col-span-3 ">
            <div className="text-3xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 font-semibold pt-2">
              Published on {dateFormat(`${blog.date}`, "mmmm dS, yyyy")}
            </div>
            <div className="pt-4 text-xl">{blog.content}</div>
            <div className="flex justify-end py-6">
              <button
                onClick={() => {
                  navigate(`/blogs/edit/${blog.id}`);
                }}
                className="flex justify-end mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 flex justify-center flex-col mt-1.5 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </button>
              <button onClick={handleRemove} className=" mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mt-1.5 ml-2 flex justify-center flex-col"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid col-span-4 lg:col-span-1 lg:ml-10 ">
            <div>
              <div className="text-slate-500">Author</div>
              <div className=""></div>
              <div className="flex mt-3 mb-3">
                <div className="flex justify-center flex-col">
                  <Avatar name={blog.author.name || "Anonymous"} size="big" />
                </div>
                <div className="text-2xl font-bold pl-2">
                  {blog.author.name}
                </div>
              </div>
              <div className="text-slate-400 ">{blog.author.about}</div>
            </div>
          </div>
          <div className="lg:grid-col-span-3">
            <div className="font-bold  mt-4 pt-4">Comments</div>
            <div className=" mt-3">
              {comment
                ? comment.map((com) => (
                    <div key={com.id}>
                      <BlogCard
                        authorname={com.user.name}
                        content={com.content}
                        type="comments"
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function removeBlog(id: string) {
  try {
    const response = await fetch(`${BACKEND_URL}/api/v1/blog/${id}`, {
      method: "DELETE",
      headers: {
        authorization: localStorage.getItem("token") ?? "",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return true; // Blog deleted successfully
    } else {
      const message = await response.text();
      throw new Error(message);
    }
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw new Error("An error occurred while deleting the blog.");
  }
}
