import { useState } from "react";

import { BACKEND_URL } from "../config";
import { useNavigate, useParams } from "react-router-dom";

export const CommentBox = () => {
  const [content, setcontent] = useState("");
  const blogid = useParams().id;
  const userId = localStorage.getItem("id");
  const navigate = useNavigate();
  const handleSubmit = () => {
    fetch(`${BACKEND_URL}/api/v1/blog/comment`, {
      method: "POST",
      body: JSON.stringify({ content, blogid, userId }), // Send data as JSON string
      headers: {
        authorization: localStorage.getItem("token") ?? "",
        "Content-Type": "application/json",
      },
    }).then(async (result: any) => {
      if (!result.ok) {
        throw new Error("Failed");
      }
      alert("Comment successful");
      console.log(content);
      navigate(`/blogs/${blogid}`);
    });
  };
  return (
    <div className=" lg:px-14 px-5 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 mx- lg:mx-16 pt-8 ">
        <div className="grid col-span-1 lg:col-span-3">
          <textarea
            id="message"
            rows={4}
            className=" p-2.5  w-full max-w-screen-lg text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Add a comment"
            defaultValue=""
            onChange={(e) => setcontent(e.target.value)}
          ></textarea>
        </div>
        <div className="grid col-span-1 md:col-span-3 ml-4 md:mr-1 flex justify-end">
          <button className="mt-4" onClick={handleSubmit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
