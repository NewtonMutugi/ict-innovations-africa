import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      Swal.fire({
        title: "Unauthorized",
        text: "You are not authorized to access this page. Please sign in.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      router.push("/admin/signin");
    }
  }, [router]);

  return isAuthenticated;
};

export default useAuth;
