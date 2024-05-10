import { Appbar } from "../components/Appbar";
import { useProfile } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { LabelledInput } from "../components/Auth";

export const UserDetails = () => {
  const username = localStorage.getItem("name") ?? "Anonymous";
  const { user, loading } = useProfile();
  if (loading) {
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
  if (user) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center items-center py-9 md:py-12">
          <BigAvatar name={username} />
        </div>
        <div className="flex justify-center">
          <div className="flex-col">
            <LabelledInput
              label="ID"
              defaultValue={`${user.id}`}
              placeholder="UserID"
              disabled
            />
            <LabelledInput
              label="Email"
              defaultValue={`${user.email}`}
              placeholder="Email"
              disabled
            />
            <LabelledInput
              label="Name"
              defaultValue={`${username}`}
              placeholder="Full Name"
            />
            <LabelledInput
              label="About Me"
              defaultValue={`${user.about}`}
              placeholder="About me"
            />
            <button
              onClick={() => {
                alert("Feature coming soon");
              }}
              type="button"
              className="mt-2 text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white-200 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2"
            >
              Save changes
            </button>
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
