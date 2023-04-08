import { signTypes } from "./../types/common";
const regularExpression =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

/************** Sign Validation Function **************/

export const validSign = ({ email, password }: signTypes) => {
  let valid = true;
  let message = "All done";

  if (
    !(
      email?.includes("@") &&
      email?.indexOf("@") > 2 &&
      email?.length - email.indexOf("@") > 5
    )
  ) {
    valid = false;
    message = "Please enter a valid email address.";
    return { valid, message };
  }

  if (!regularExpression.test(password)) {
    valid = false;
    message =
      "Please enter a valid password. at least ( 8 char, 1 Uppercase, 1 Lowercase, 1 Special char)";
    return { valid, message };
  }

  return { valid, message };
};
