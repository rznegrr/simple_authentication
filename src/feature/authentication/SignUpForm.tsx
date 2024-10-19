import { useForm } from "react-hook-form";

import { TextField, Box, Button, FormControl, Typography } from "@mui/material";

import AppLayout from "../../ui/AppLayout";
import { signUp } from "../../services/apiAuthentication";

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
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const onSubmit = async (data: SignupFormInputs) => {
    const userData: UserData = await signUp(data);
    const { user, access, refresh } = userData;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("access", JSON.stringify(access));
    localStorage.setItem("refresh", JSON.stringify(refresh));
  };

  return (
    <AppLayout>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "350px",
          gap: 2,
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography align="center" variant="h4">
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
        <Button variant="contained" type="submit" size="large">
          ثبت نام
        </Button>
      </Box>
    </AppLayout>
  );
}

export default SignUpForm;
