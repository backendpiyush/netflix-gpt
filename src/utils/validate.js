export const validateData = (email, password) => {
  email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!email) return "email id is not valid";
  if (!password) return "password is not valid";

  return null;
};
