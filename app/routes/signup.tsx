import { MetaFunction } from "@remix-run/react";
import LoginCarousel from "~/components/Login/LoginCarousel";
import SignupForm from "~/components/Signup/SignupForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Join Us" },
    { name: "Signup", content: "Become a quest master" },
  ];
};

const Signup = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 lg:h-screen">
      <div className="hidden lg:inline-block lg:w-1/2 xl:w-[65%]">
        <LoginCarousel />
      </div>
      <div className="lg:w-1/2 xl:w-[35%]">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
