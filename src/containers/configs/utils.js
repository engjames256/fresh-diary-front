export const isFramelessPage = pathname => {
  return [`/`, `/login`, `/register`, `/forgotpassword`].includes(pathname);
};

export const baseURL = "https://fresh-diary-back.herokuapp.com/";
