import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  username: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
