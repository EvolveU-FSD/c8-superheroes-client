import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const logout = async () => {
      const response = await fetch("/auth/logout");
      if (response.status === 200) {
        navigate(-1);
      } else {
        alert("logout failed");
        navigate(-1);
      }
    };
    logout();
  }, []);

  return null;
};

export default Logout;
