import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import "./index.css";

import { CssBaseline } from "@mui/material";
import ProtectedRoutes from "./ui/ProtectedRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes> } />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
