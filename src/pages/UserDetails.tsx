import { Appbar } from "../components/Appbar";
import { useProfile } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { LabelledInput } from "../components/Auth";

export const UserDetails = () => {
  const username = localStorage.getItem("name") ?? "Anonymous";
  const { user, loading } = useProfile();
  if (user) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center items-center py-9 md:py-12">
          <BigAvatar name={username} />
        </div>
        <div className="flex justify-center">
          <div className="flex-col">
            <LabelledInput label="ID" placeholder={`${user.id}`} />
            <LabelledInput label="Email" placeholder={`${user.email}`} />
            <LabelledInput label="Name" placeholder={`${username}`} />
            <LabelledInput label="About Me" placeholder={`${user.about}`} />
          </div>
        </div>
      </div>
    );
  } else {
    loading;
    return (
      <div>
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
      </div>
    );
  }
};

function BigAvatar({ name }: { name: string }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 md:w-56 md:h-56 w-40 h-40`}
    >
      <span className="text-white text-9xl">{name[0]}</span>
    </div>
  );
}
