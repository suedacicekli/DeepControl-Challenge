import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is a required field"),
  password: yup.string().min(8, "Must Contain 8 Characters").required(),

});

export default validations;
