import { useNavigate, useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";

interface BlogCardProps {
  authorname: string;
  title: string;
  content: string;
  publishedDate: string;
  type: "blog" | "blogs";
}

export const BlogCard = ({
  authorname,
  title,
  content,
  publishedDate,
  type,
}: BlogCardProps) => {
  return (
    <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md">
      <div className="flex">
        <Avatar name={authorname} size="small" />
        <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
          {authorname}
        </div>
        <div className="pl-2 text-xs flex justify-center flex-col text-gray-400">
          &#9679;
        </div>
        <div className="font-thin pl-2 text-slate-500 text-sm flex justify-center flex-col">
          {publishedDate}
        </div>
      </div>
      <div className="font-semibold text-xl pt-2">{title}</div>
      <div className="font-thin text-md">
        {type === "blogs"
          ? content.length > 100
            ? content.slice(0, 100) + "..."
            : content
          : content}
      </div>
      <div className="text-slate-500 text-sm font-thin pt-4 flex justify-between">
        {`${Math.ceil(content.length / 100)} minute(s) read`}
        {type === "blog" ? (
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 flex justify-center flex-col mt-1.5 ml-2"
              onClick={Remove}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export function Avatar({
  name,
  size,
}: {
  name: string;
  size: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span
        className={` text-gray-600 dark:text-gray-300 ${
          size === "small" ? "text-xs" : "text-md"
        }`}
      >
        {name[0]}
      </span>
    </div>
  );
}

const Remove = async () => {
  const navigate = useNavigate();
  const { id } = useParams();

  try {
    const response = await fetch(`${BACKEND_URL}/api/v1/blog/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete blog post");
    }

    console.log("Blog post deleted successfully");
    navigate("/blogs");
  } catch (error: any) {
    console.error("Error deleting blog post:", error.message);
    // Handle error, e.g., display an error message to the user
  }
};
