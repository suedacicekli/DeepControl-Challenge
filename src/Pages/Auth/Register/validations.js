import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("enter a valid email")
    .required("email is a required field"),

  password: yup
    .string()
    .min(8, "Must Contain 8 Characters")
    .required()
    .matches(/^(?=.*[a-z])/, " Must Contain One Lowercase Character")
    .matches(/^(?=.*[A-Z])/, "  Must Contain One Uppercase Character")
    .matches(/^(?=.*[0-9])/, "  Must Contain One Number Character")
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      "  Must Contain  One Special Case Character"
    ),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar uyuşmuyor")
    .required(),
});

export default validations;
