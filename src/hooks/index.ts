import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export interface Blog {
  author: { name: string };
  title: string;
  content: string;
  id: string;
  date: string
}
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token") ?? "";

    fetch(`${BACKEND_URL}/api/v1/blog/bulk`, {
      headers: { authorization: token },
    })
      .then(async (response: any) => {
        if (!response.ok) {
          throw new Error("Failed, you have been signed out");
        }
        const stat = await response.json();
        setBlogs(stat.blogs);

        setLoading(false);
      })
      .catch((error: Error) => {
        console.error("error found", error);
        navigate("/signin");
      });
  }, []);
  return {
    loading,
    blogs,
  };
};

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token") ?? "";

    fetch(`${BACKEND_URL}/api/v1/blog/${id}`, {
      headers: { authorization: token },
    })
      .then(async (response: any) => {
        if (!response.ok) {
          throw new Error("Failed");
        }
        const stat = await response.json();
        setBlog(stat.blog);
        setLoading(false);
        console.log("loaded");
      })
      .catch((error: Error) => {
        console.error("error found", error);
        navigate("/signin");
      });
  }, [id]);
  return {
    loading,
    blog,
  };
};
