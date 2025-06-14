"use client";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import Loading from "../dashboard/loading";
import { BACKEND_URL } from "@/app/constants";

const SigninPage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const isAuthenticated = useAuth();
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
    const token = localStorage.getItem("token");
    if (token) {
      testTokenValidity(token);
      setIsAuthenticated(true);
    } else {
      // Swal.fire({
      //   title: "Unauthorized",
      //   text: "You are not authorized to access this page. Please sign in.",
      //   icon: "error",
      //   confirmButtonText: "Ok",
      // });
      // router.push("/admin/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  if (isAuthenticated) {
    if (isAuthenticated) {
      Swal.fire({
        title: "Authorized",
        text: "You are already signed in. Redirecting you to dashboard.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      router.push("/admin/dashboard");
    }
  }

  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      // Cache data
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      Swal.fire({
        title: "Error",
        text: "You are required to login again!",
        icon: "error",
      });
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/admin/signin");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch(`${BACKEND_URL}/api/auth/jlogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.access_token);
      await fetchUserData();
      Swal.fire({
        icon: "success",
        title: "Login successful",
        text: "You will be redirected to the dashboard",
      });
      router.push("/admin/dashboard");
      setLoading(false);
    } else {
      const data = await res.json();
      console.log(data);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login failed! Please check your credentials",
      });
      setLoading(false);
    }
  };
  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                <Link
                  href="/"
                  className={`header-logo my-5 block w-full p-5 lg:p-2  `}
                >
                  <div className="flex flex-row justify-center">
                    <Image
                      src="/images/about/aiInnovations.svg"
                      alt="ICT Innovations Africa"
                      width={150}
                      height={150}
                      className="m-5"
                      priority={true}
                    />
                  </div>

                  <h2 className="flex-wrap text-center text-3xl font-bold text-primary dark:text-primary sm:text-xl lg:text-4xl">
                    ICTInnovations.africa
                  </h2>
                </Link>
                <span className="bg-body-color/50">
                  <hr className="m-5" />
                </span>
                <h3 className="mb-3 text-center text-xl font-bold text-black dark:text-white sm:text-3xl">
                  Sign in
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Login to access the admin panel of the platform
                </p>
                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
                  <p className="w-full px-5 text-center text-base font-medium text-body-color">
                    Or, sign in with your email
                  </p>
                  <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
                </div>
                <form onSubmit={handleLogin}>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your Email"
                      className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Your Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
                    <div className="mb-4 sm:mb-0">
                      <label
                        htmlFor="checkboxLabel"
                        className="flex cursor-pointer select-none items-center text-sm font-medium text-body-color"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="checkboxLabel"
                            className="sr-only"
                          />
                          <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                            <span className="opacity-0">
                              <svg
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#3056D3"
                                  stroke="#3056D3"
                                  strokeWidth="0.4"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        Keep me signed in
                      </label>
                    </div>
                    <div>
                      <a
                        href="#0"
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div className="mb-6">
                    {!loading ? (
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      >
                        Sign in
                      </button>
                    ) : (
                      <Loading />
                    )}
                  </div>
                </form>
                {/* <p className="text-center text-base font-medium text-body-color">
                  Don’t you have an account?{" "}
                  <Link
                    href="/admin/signup"
                    className="text-primary hover:underline"
                  >
                    Sign up
                  </Link>
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default SigninPage;
