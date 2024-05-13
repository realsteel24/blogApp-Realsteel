interface BlogCardProps {
  authorname: string;
  title?: string;
  content: string;
  publishedDate?: string;
  type: "blog" | "blogs" | "comments";
}

export const BlogCard = ({
  authorname,
  title,
  content,
  publishedDate,
  type,
}: BlogCardProps) => {
  return (
    <div className=" border-b border-slate-200 pb-4 px-4 pt-4 w-full max-w-screen-md">
      <div className="flex ">
        <Avatar name={authorname} size="small" />
        <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
          {authorname}
        </div>
        {type === "comments" ? null : (
          <div className="pl-2 text-xs flex justify-center flex-col text-gray-400">
            &#9679;
          </div>
        )}
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
