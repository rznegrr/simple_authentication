import { useNavigate } from "react-router-dom";
import { useUser } from "../feature/authentication/useUser";
import { useEffect } from "react";

type ChildrenProps = {
  children: React.ReactNode;
};

function ProtectedRoutes({ children }: ChildrenProps) {
  const navigate = useNavigate();
  const { user, isPending } = useUser();

  useEffect(() => {
    if (!user && !isPending) {
      navigate("/login");
    }
  }, [isPending, user, navigate]);
  
  return children;
}

export default ProtectedRoutes;
