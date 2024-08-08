import { commonInputProps } from "@/app";
import { SearchSchema } from "@/schemas/SearchSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";

const Search = ({
  apiUrl,
  placeholder,
}: {
  apiUrl: string;
  placeholder?: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(SearchSchema),
  });
  const onSubmit = (data: any) => {
    toast.success(data.query);
    console.log(apiUrl);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="search-container flex flex-col gap-1"
    >
      <div className="flex flex-row items-center shadow-xl rounded-full">
        <input
          id="query"
          {...register("query")}
          className="search-input rounded-l-full border-2 border-black px-4 py-2 h-10"
          placeholder={placeholder ? placeholder : "Search"}
        />
        <button
          type="submit"
          className="text-xl px-4 py-2 bg-black text-white rounded-r-full h-10"
        >
          <FaSearch />
        </button>
      </div>
      {errors.query && (
        <p className="text-sm text-red-400">{errors.query.message}</p>
      )}
    </form>
  );
};

export default Search;
