import { useEffect, useState } from "react";
import { BlogCard } from "./BlogCard";

export const CommentBox = () => {
  const [isComment, setIsComment] = useState(false);

  useEffect(()=> {setIsComment(true)}, []);
  return (
    <div className=" lg:mx-14">
      <div className="grid grid-cols-1 lg:grid-cols-4 px-12 lg:px-16 pt-10 ">
        <div className="grid col-span-4">Comments</div>

        <div className="grid col-span-4 mt-3">
          {isComment ? (
            <BlogCard
              authorname="Rishika"
              content="asdapndsak"
              type="comments"
            />
          ) : null}
        </div>
        <div className="grid col-span-3">
          <textarea
            onChange={(e) => e}
            id="message"
            rows={4}
            className=" p-2.5  w-full max-w-screen-lg text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Add a comment"
            defaultValue=""
          ></textarea>
        </div>
        <div className="grid col-span-1 md:col-span-3 ml-4 md:mr-1 flex justify-end">
          <button
            className="mt-4"
            onClick={() => {
              alert("Coming soon");
            }}
          >
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
