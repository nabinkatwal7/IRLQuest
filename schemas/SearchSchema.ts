import * as yup from "yup";

export const SearchSchema = yup.object().shape({
  query: yup.string().required(),
});
