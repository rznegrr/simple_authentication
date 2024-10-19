import { TextField, Box, Button, FormControl, Typography } from "@mui/material";
import AppLayout from "../../ui/AppLayout";
import { useForm } from "react-hook-form";
import { login } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type LoginFormInputs = {
  email: string;
  password: string;
};

type UserData = {
  access: string;
  refresh: string;
};

function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    setIsSubmitting(true);
    const userData: UserData = await login(data);
    const { access, refresh } = userData;
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
    navigate("/dashboard");
    setIsSubmitting(false);
  };

  return (
    <AppLayout>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: { xs: "350px", lg: "400px" },
          padding: { xs: "40px", lg: "60px" },
          gap: 2,
          border: "2px solid #141414be",
          borderRadius: 3,
          justifyContent: "center",
          margin: "auto",
          backgroundColor: "#141414be",
        }}
      >
        <Typography align="center" variant="h5" mb={2}>
          ورود
        </Typography>
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
          ورود
        </Button>
      </Box>
    </AppLayout>
  );
}

export default LoginForm;
