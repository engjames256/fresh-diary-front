export const isFramelessPage = pathname => {
  return [`/`, `/login`, `/register`,`/forgotpassword` ].includes(pathname);
};
