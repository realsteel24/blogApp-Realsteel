import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 px-12 pt-10">
        <div className="grid col-span-8 ">
          <div className="text-3xl font-extrabold">{blog.title}</div>
          <div className="text-slate-500 font-semibold pt-2">
            Published on 24th June
          </div>
          <div className="pt-4 text-xl">{blog.content}</div>
        </div>

        <div className="grid col-span-4 ml-10">
          <div>
            <div className="text-slate-500">Author</div>
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

