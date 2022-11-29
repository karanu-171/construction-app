
export const setEmployerHeaders = () => {
  const employerHeader = {
    headers: {
      "x-employer-token": localStorage.getItem("token"),
    },
  };

  return employerHeader;
};
