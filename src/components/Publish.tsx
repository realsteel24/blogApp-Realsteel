import { useState } from "react";
import { Appbar } from "./Appbar";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/v1/blog/create`, {
        method: "POST",
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
      navigate("/blogs");
    } catch (error) {
      console.error("Error publishing post:", error);
      // Handle error here (optional)
      alert("Failed to publish post. Please try again.");
    }
  };
  return (
    <div className="">
      <Appbar />

      <div className=" flex justify-center">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className="my-8 mx-6 bg-gray-50 border w-full max-w-screen-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
          placeholder="Title"
        />
      </div>
      <div className="flex justify-center">
        <textarea
          onChange={(e) => setcontent(e.target.value)}
          id="message"
          rows={10}
          className="block p-2.5 mx-6 w-full max-w-screen-lg text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleSubmit}
          type="button"
          className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Publish Post
        </button>
      </div>
    </div>
  );
};
