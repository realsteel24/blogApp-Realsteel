import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { EditPost } from "../components/EditPost";
import { CommentBox } from "../components/CommentBox";

export const Blog = ({ type }: { type: "publish" | "edit" }) => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });
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
  if (blog) {
    return (
      <div>
        <Appbar />

        {type === "publish" ? (
          <div>
            <FullBlog blog={blog} />
            <CommentBox />
          </div>
        ) : (
          <EditPost blog={blog} />
        )}
      </div>
    );
  }
};
