import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4 lg:p-20 h-screen w-screen font-secondary">
      <p className="text-5xl font-extrabold">Houston, we have a 404 problem</p>
      <p className="text-xl">
        Looks like this destination might be lost in space. Maybe the URL is
        wrong, or the page no longer exists (like Alderaan), or you might have
        just wandered off on your own
      </p>
      <Link
        href="/user/dashboard"
        className="bg-black text-white px-4 py-2 rounded-lg text-xl hover:text-black hover:bg-white transition-all duration-700 hover:border-2 border-black"
      >
        Go back to safety
      </Link>
    </div>
  );
};

export default NotFound;
