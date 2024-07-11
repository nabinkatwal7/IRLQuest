import EarnedRewards from "./EarnedRewards";
import ForumPosts from "./ForumPosts";
import FriendsCard from "./FriendsCard";
import ProfileCard from "./ProfileCard";

const ProfileWrapper = () => {
  return (
    <div className="profile-wrapper flex flex-col gap-3">
      <ProfileCard />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <FriendsCard />
        <ForumPosts />
        <EarnedRewards />
      </div>
    </div>
  );
};

export default ProfileWrapper;
