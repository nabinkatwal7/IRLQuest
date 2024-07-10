import { useForm } from "react-hook-form";
import LoginInput from "../common/LoginInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "@remix-run/react";
import { SignupSchema } from "~/schemas/Signup/Signupschema";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(SignupSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-10 justify-between items-center h-full p-4 lg:px-10 lg:py-20 font-primary">
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex flex-col gap-2 xl:gap-4 items-center">
          <p className="text-3xl xl:text-7xl font-extrabold">Join us</p>
          <p>Manage your life with simple quests. Get started for free.</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <div className="flex flex-row gap-2">
            <LoginInput
              id="firstName"
              label="firstName"
              type="text"
              register={register}
              errors={errors}
              placeholder="First Name"
            />
            <LoginInput
              id="lastName"
              label="lastName"
              type="text"
              register={register}
              errors={errors}
              placeholder="Last Name"
            />
          </div>
          <LoginInput
            id="username"
            label="username"
            type="text"
            register={register}
            errors={errors}
            placeholder="Username"
          />
          <LoginInput
            id="email"
            label="email"
            type="email"
            register={register}
            errors={errors}
            placeholder="Email"
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
        <p>Already a quest master?</p>
        <Link to="/login" className="text-red-400">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
