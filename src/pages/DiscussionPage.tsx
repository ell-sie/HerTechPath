import DiscussionTemplate from "../components/DiscussionTemplate";
import PostInput from "../components/shared/PostInput";
import { usePostsQuery } from "../hooks/post/usePostsQuery";
import Spinner from "../assets/Spinner";

export default function DiscussionPage() {
  const { isPending, error, data: posts } = usePostsQuery();

  if (isPending) {
    return (
      <div className=" flex flex-col items-center p-40">
        <div></div>
        <Spinner className="size-10" />
      </div>
    );
  }


  if (error) {
    return <div>Error loading posts: {error.message}</div>;
  }

  return (
    <div className="flex flex-col justify-between gap-5 py-10">
      <div className="text-4xl font-bold font-poppins">Discussions</div>
      <PostInput />
      <div className="flex flex-col gap-4">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <DiscussionTemplate
              key={post.id}
              title={post.title ?? "Untitled"}
              Discussion={post.description ?? "No description available."}
              id={post.id}
            />
          ))
        ) : (
          <p>No discussions available.</p>
        )}
      </div>
    </div>
  );
}
