import { TextField, Box, Button, FormControl, Typography } from "@mui/material";
import AppLayout from "../../ui/AppLayout";
import { useForm } from "react-hook-form";
import { login } from "../../services/apiAuthentication";

type LoginFormInputs = {
  email: string;
  password: string;
};

type UserData = {
  access: string;
  refresh: string;
};

function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    const userData: UserData = await login(data);
    const { access, refresh } = userData;
    localStorage.setItem("access", JSON.stringify(access));
    localStorage.setItem("refresh", JSON.stringify(refresh));
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
          maxWidth: "350px",
          gap: 2,
        }}
      >
        <Typography align="center" variant="h4">
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
        <Button variant="contained" type="submit" size="large">
          ورود
        </Button>
      </Box>
    </AppLayout>
  );
}

export default LoginForm;
