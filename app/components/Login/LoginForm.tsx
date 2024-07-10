import { useForm } from "react-hook-form";
import LoginInput from "../common/LoginInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "~/schemas/Login/Loginschema";
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "@remix-run/react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(LoginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-10 justify-between items-center h-full p-4 lg:px-10 lg:py-20 font-primary">
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex flex-col gap-2 xl:gap-4 items-center">
          <p className="text-3xl xl:text-7xl font-extrabold">Welcome back!</p>
          <p>
            Simplify your workflow and boost your productivity with IRL Quest.
            Get started for free.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <LoginInput
            id="username"
            label="username"
            type="text"
            register={register}
            errors={errors}
            placeholder="Username"
          />
          <LoginInput
            id="password"
            label="password"
            type={showPassword ? "text" : "password"}
            register={register}
            errors={errors}
            placeholder="Password"
          />
          <div className="flex w-full justify-end">
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="flex flex-row gap-2 items-center px-2 text-sm"
            >
              {showPassword ? (
                <>
                  <FaRegEyeSlash />
                  <p>Hide Password</p>
                </>
              ) : (
                <>
                  <FaEye />
                  <p>Show Password</p>
                </>
              )}
            </button>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 w-full rounded-full font-bold"
          >
            Login
          </button>
        </form>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <p>Not a member?</p>
        <Link to="/signup" className="text-red-400">
          Register now
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
