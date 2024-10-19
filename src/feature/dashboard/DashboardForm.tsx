import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useUser } from "../authentication/useUser";

import {
  Button,
  FormControl,
  FormLabel,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";

import AppLayout from "../../ui/AppLayout";
import { logout, updateUser } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";

type DashboardFormInputs = {
  full_name: string;
  date_of_birth: string;
  address: string;
  phone_number: string;
  national_id: string;
};

function DashboardForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate()

  const { handleSubmit, register, reset } = useForm<DashboardFormInputs>();

  const onSubmit = async (data: DashboardFormInputs) => {
    setIsSubmitting(true);
    await updateUser(user.id, data);
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  const handleLogout = async () => {
    await logout()
    navigate('/')
  };

  return (
    <AppLayout>
      <Grid2
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "100%",
          gap: 2,
          border: "2px solid #141414be",
          borderRadius: 3,
          maxWidth: { xs: "350px", sm: "700px" },
          padding: { xs: "40px", lg: "60px" },
          justifyContent: "center",
          margin: "auto",
          backgroundColor: "#141414be",
        }}
        container
        spacing={2}
      >
        <Grid2 size={12}>
          <Typography align="center" variant="h5" mb={2}>
            اطلاعات کاربری
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth>
            <FormLabel htmlFor="full_name">نام و نام خانوادگی</FormLabel>
            <TextField
              id="full_name"
              sx={{ marginTop: 1 }}
              {...register("full_name")}
            />
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth>
            <FormLabel htmlFor="date_of_birth">تاریخ تولد</FormLabel>
            <TextField
              id="date_of_birth"
              sx={{ marginTop: 1 }}
              {...register("date_of_birth")}
            />
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth>
            <FormLabel htmlFor="national_id">کد ملی</FormLabel>
            <TextField
              id="national_id"
              sx={{ marginTop: 1 }}
              {...register("national_id")}
            />
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth>
            <FormLabel htmlFor="phone_number">شماره تماس</FormLabel>
            <TextField
              id="phone_number"
              sx={{ marginTop: 1 }}
              {...register("phone_number")}
            />
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth>
            <FormLabel htmlFor="address">آدرس</FormLabel>
            <TextField
              id="address"
              sx={{ marginTop: 1 }}
              {...register("address")}
            />
          </FormControl>
        </Grid2>
        <Grid2 size={12}>
          <Button
            variant="contained"
            type="submit"
            size="large"
            sx={{ mt: 2 }}
            fullWidth
            disabled={isSubmitting}
          >
            ذخیره اطلاعات
          </Button>
        </Grid2>
        <Grid2 size={12}>
          <Button
            variant="text"
            size="large"
            fullWidth
            onClick={handleLogout}
          >
            خروج از حساب کاربری
          </Button>
        </Grid2>
      </Grid2>
    </AppLayout>
  );
}

export default DashboardForm;
