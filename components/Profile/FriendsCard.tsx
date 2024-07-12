import Image from "next/image";

const FriendsCard = () => {
  return (
    <div className="friends-card flex flex-col gap-4 border-2 p-4 rounded-lg shadow-lg hover:shadow-xl hover:border-black transition-all duration-700">
      <p className="text-xl font-bold">Friends</p>
      <div className="flex flex-wrap gap-x-8 gap-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex flex-row gap-2 items-center">
            <Image
              src="/img/sheldon.jpeg"
              alt="sheldon"
              width={50}
              height={50}
              className="rounded-full object-cover w-10 h-10"
            />
            <p>Leonard Hofstader</p>
          </div>
        ))}
        <div className="flex flex-row gap-2 items-center">
          <div className="size-[50px] rounded-full bg-gray-400 animate-pulse"></div>
          <p>+95 More</p>
        </div>
      </div>
    </div>
  );
};

export default FriendsCard;
