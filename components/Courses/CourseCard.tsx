import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const CourseCard = () => {
  return (
    <div className="course-card flex flex-col gap-4 p-2 border-2 rounded-lg hover:shadow-xl hover:border-black transition-all duration-700">
      <div className="overflow-hidden rounded-lg">
        <Image
          src="https://media.istockphoto.com/id/942114184/photo/mount-everest-with-group-of-climbers.jpg?s=2048x2048&w=is&k=20&c=X2OPJSceKSFkKTVXuEwr8pcR_a6Q5QJ4WToYs7U9SB4="
          alt="sheldon"
          width={500}
          height={500}
          className="object-cover w-full h-40 md:h-80 lg:h-40 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      <div className="w-[80%]">
        <div className="price-container flex flex-row gap-2 items-center">
          {/* its either one of three */}
          <p className="text-primary-foreground/80 text-sm bg-green-700 p-1 rounded-lg text-white">
            Free
          </p>
          <p className="text-primary-foreground/80 text-sm bg-blue-700 p-1 rounded-lg text-white">
            Included with Subscription
          </p>
          <p className="text-primary-foreground/80 text-sm bg-red-700 p-1 rounded-lg text-white">
            $100
          </p>
        </div>
        <p className="text-xl font-bold">Course Name</p>
        <p className="text-primary-foreground/80 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        </p>
      </div>
      <div className="flex flex-row gap-2 items-center justify-between">
        <p className="text-primary-foreground/80 ">1M Views</p>
        <div className="ratings flex flex-row gap-2 items">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="star text-[#ffcf40]">
              <FaStar />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
