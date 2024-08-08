import { PrivacyPolicy } from "@/data/privacyPolicy";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

const Page = () => {
  return (
    <div className="w-screen flex flex-col gap-4 p-4 lg:p-8 font-primary">
      <Link
        href="/user/dashboard"
        className="flex flex-row gap-2 items-center uppercase text-xl hover:font-bold transition-all duration-300"
      >
        <IoMdArrowBack />
        Back to Dashboard
      </Link>
      <div className="flex flex-col gap-4 px-4 lg:px-10">
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold">{PrivacyPolicy.title}</p>
          <p className="text-xl text-justify">
            {PrivacyPolicy.headerDescription}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold">{PrivacyPolicy.secondTitle}</p>
          <p className="text-xl text-justify">
            {PrivacyPolicy.secondDescription}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold">{PrivacyPolicy.thirdTitle}</p>
          <p className="text-xl text-justify">
            {PrivacyPolicy.thirdDescription}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold">{PrivacyPolicy.fourthTitle}</p>
          <p className="text-xl text-justify">
            {PrivacyPolicy.fourthDescription}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold">{PrivacyPolicy.fifthTitle}</p>
          <p className="text-xl text-justify">
            {PrivacyPolicy.fifthDescription}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold">{PrivacyPolicy.sixthTitle}</p>
          <p className="text-xl text-justify">
            {PrivacyPolicy.sixthDescription}
          </p>
        </div>
      </div>

      <p className="text-2xl font-extrabold uppercase px-4 lg:px-10">
        {PrivacyPolicy.end}
      </p>
    </div>
  );
};

export default Page;
