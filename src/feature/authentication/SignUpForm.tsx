import { useForm } from "react-hook-form";

import { TextField, Box, Button, FormControl, Typography } from "@mui/material";

import AppLayout from "../../ui/AppLayout";
import { signUp } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type SignupFormInputs = {
  username: string;
  email: string;
  password: string;
};

type UserData = {
  user: object;
  access: string;
  refresh: string;
};

function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const onSubmit = async (data: SignupFormInputs) => {
    setIsSubmitting(true);
    const userData: UserData = await signUp(data);
    console.log(userData);
        
    const { access, refresh } = userData;
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
    setIsSubmitting(false);
    navigate("/dashboard");
  };

  return (
    <AppLayout>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: { xs: "350px", lg:"400px", },
          padding: { xs: "40px", lg:"60px"},
          gap: 2,
          border: "2px solid #141414be",
          borderRadius: 3,
          justifyContent: "center",
          margin: "auto",
          backgroundColor: "#141414be",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography align="center" variant="h5" mb={2}>
          ثبت نام
        </Typography>
        <FormControl>
          <TextField
            placeholder="نام کاربری"
            variant="outlined"
            autoComplete="username"
            helperText={errors.username?.message}
            error={!!errors.username}
            {...register("username", { required: "نام کاربری خالی است" })}
          />
        </FormControl>
        <FormControl>
          <TextField
            placeholder="ایمیل"
            variant="outlined"
            autoComplete="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email", { required: "ایمیل خالی است" })}
          />
        </FormControl>
        <FormControl>
          <TextField
            placeholder="رمز عبور"
            variant="outlined"
            autoComplete="password"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register("password", { required: "پسوورد را وارد کنید" })}
          />
        </FormControl>
        <Button
          variant="contained"
          type="submit"
          size="large"
          sx={{ mt: 2 }}
          disabled={isSubmitting}
        >
          ثبت نام
        </Button>
      </Box>
    </AppLayout>
  );
}

export default SignUpForm;
