import { Box } from "@mui/material";

type ChildrenProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: ChildrenProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingY:"16px"
      }}
    >
      {children}
    </Box>
  );
}

export default AppLayout;
