import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Alert } from "@mui/material";
import { useForm } from "react-hook-form";
import UserAccounts from "../userAccounts";

export default function LoginTemplate() {
  const [msg, setMsg] = useState("");
  const { onLogin, token, loginError } = useContext(AuthContext);
  const { control, formState: { errors }, handleSubmit,} = useForm({ username: "", password: "" });

  const navigate = useNavigate();
    if (token) {
      useEffect(() => {
      navigate("/movies");
    })}

  const onSubmit = async (credentials) => {
    const error = await onLogin({
      username: credentials.username,
      password: credentials.password,
    });
    if (error) {
      setMsg(error.message);
    }
  };

  return (
    <>
      <Typography variant="h4" textAlign="center" sx={{ mt: 5 }}>
        Login to TMDB Client
      </Typography>
      <Typography variant="h6" textAlign="center" color="textSecondary" sx={{mb: 3}}>
        Enter your login details below.
      </Typography>
      {loginError && <Alert severity="error">{loginError}</Alert>}
      <UserAccounts
        submitBtnLabel="Login"
        control={control}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
        authMsg={msg}
        isLogin={true}
        hasError={loginError}
      />
    </>
  );
}