import Link from "next/link";

const ForumPosts = () => {
  return (
    <div className="forum-posts flex flex-col gap-4 border-2 p-4 rounded-lg shadow-lg">
      <p className="text-xl font-bold">Forum Posts</p>
      <div className="flex flex-col gap-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col px-2">
            <p>How I achieved mindfulness</p>
            <p className="text-xs italic font-secondary">27 Jan 2024</p>
          </div>
        ))}
        <Link href="/user/forum">Show all posts</Link>
      </div>
    </div>
  );
};

export default ForumPosts;
