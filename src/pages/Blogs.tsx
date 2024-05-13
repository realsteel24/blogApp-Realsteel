import { Link } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";
import dateFormat from "dateformat";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="">
          {blogs.map((blog) => (
            <Link to={blog.id} key={blog.id}>
              <BlogCard
                title={blog.title}
                content={blog.content}
                authorname={blog.author.name ?? "Anonymous"}
                publishedDate={dateFormat(`${blog.date}`, "mmmm dS, yyyy")}
                type="blogs"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
