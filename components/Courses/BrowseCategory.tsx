import Search from "../common/Search";
import CourseCard from "./CourseCard";

const BrowseCategory = ({ name }: { name: string }) => {
  return (
    <div className="w-full min-h-[80dvh] flex flex-col gap-6">
      {name === "All" && (
        <div className="w-full flex flex-row items-center justify-center">
          <Search
            apiUrl="/api/courses/search"
            placeholder="Search courses by name"
          />
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* !TODO: make it reusable in api integration */}
        {[...Array(8)].map((_, i) => (
          <CourseCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default BrowseCategory;
