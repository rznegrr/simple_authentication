import { Box } from "@mui/material";

type ChildrenProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: ChildrenProps) {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
}

export default AppLayout;
