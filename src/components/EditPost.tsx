import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { Blog } from "../hooks";

export const EditPost = ({ blog }: { blog: Blog }) => {
  const [title, setTitle] = useState(blog.title);
  const [content, setcontent] = useState(blog.content);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/v1/blog/${blog.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }), // Send data as JSON string
        headers: {
          authorization: localStorage.getItem("token") ?? "",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to publish post");
      }
      // Handle success here (optional)
      console.log("Post published successfully");

      navigate(`/blogs/`);
    } catch (error) {
      console.error("Error publishing post:", error);
      // Handle error here (optional)
      alert("Failed to publish post. Please try again.");
    }
  };
  return (
    <div className="">
      <div className=" flex justify-center">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className="my-8 mx-6 bg-gray-50 border w-full max-w-screen-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
          placeholder={blog.title}
        />
      </div>
      <div className="flex justify-center">
        <textarea
          onChange={(e) => setcontent(e.target.value)}
          id="message"
          rows={10}
          className="block p-2.5 mx-6 w-full max-w-screen-lg text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder={blog.content}
        ></textarea>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleSubmit}
          type="button"
          className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Re-publish Post
        </button>
      </div>
    </div>
  );
};
