import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = (props) => {
  return (
    <Box mt={3}>
      <Typography variant="h2">Login</Typography>
      <LoginForm {...props} />
    </Box>
  );
};

export default LoginPage;
