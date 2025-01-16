import { Loader2 } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";

interface ProtectedProps {
  children: ReactNode;
  authentication: boolean;
}

const Protected: React.FC<ProtectedProps> = ({
  children,
  authentication = true,
}) => {
  const authStatus = useSelector((state: RootState) => state.auth.status);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (authentication && authStatus != authentication) {
      navigate("/admin/login");
    }
    setIsLoading(false);
  }, [authStatus, authentication, navigate]);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin w-8 h-8 text-gray-500" />
      </div>
    );
  }
  return <>{children}</>;
};

export default Protected;
