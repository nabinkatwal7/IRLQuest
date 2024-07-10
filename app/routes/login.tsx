import { MetaFunction } from "@remix-run/react";
import LoginCarousel from "~/components/Login/LoginCarousel";
import LoginForm from "~/components/Login/LoginForm";

export const meta: MetaFunction = () => {
  return [
    { title: "Continue your quest" },
    { name: "Login", content: "Pick up where you left off" },
  ];
};

const Login = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 lg:h-screen">
      <div className="lg:w-1/2 xl:w-[35%]">
        <LoginForm />
      </div>
      <div className="hidden lg:inline-block lg:w-1/2 xl:w-[65%]">
        <LoginCarousel />
      </div>
    </div>
  );
};

export default Login;
