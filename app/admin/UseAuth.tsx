import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { BACKEND_URL } from "../constants";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const testTokenValidity = async (token) => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem("token");
        Swal.fire({
          title: "Unauthorized",
          text: "You are not authorized to access this page. Please sign in.",
          icon: "error",
          confirmButtonText: "Ok",
        });
        router.push("/admin/signin");
      }
    } catch (error) {
      console.error("Failed to verify token:", error);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        testTokenValidity(token);
      } else {
        setIsAuthenticated(false);
        Swal.fire({
          title: "Unauthorized",
          text: "You are not authorized to access this page. Please sign in.",
          icon: "error",
          confirmButtonText: "Ok",
        });
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/admin/signin");
      }
    };
    checkAuth();
  }, []);

  return isAuthenticated;
};

export default useAuth;
