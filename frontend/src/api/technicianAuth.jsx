
export const setTechnicianHeaders = () => {
  const technicianHeader = {
    headers: {
      "x-technician-token": localStorage.getItem("token"),
    },
  };

  return technicianHeader 
};
