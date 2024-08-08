import { commonInputProps } from "@/app";
import classNames from "classnames";

const LoginInput = ({
  errors,
  id,
  label,
  register,
  className,
  optional,
  ...others
}: commonInputProps) => {
  return (
    <div className="common-input-wrapper w-full">
      <div className="flex items-center gap-2"></div>
      <input
        id={id}
        name={id}
        className={classNames(
          "common-input w-full h-[42px] outline-none shadow-[0_0_7px_0_rgba(52,64,95,0.22)] text-black px-4 mt-2 mb-1.5 rounded-full border border-black",
          className
        )}
        {...register(id)}
        {...others}
      />
      {errors[`${id}`] && (
        <p className="input-error-text text-bluesh text-red-700 text-sm leading-5">
          {errors[`${id}`].message}
        </p>
      )}
    </div>
  );
};

export default LoginInput;
