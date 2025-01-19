"use client";
import useAuth from "../../UseAuth";
import Loading from "../loading";
import WebPayments from "./WebPayments";

const Page = () => {
  const isAuthenticated = useAuth();
  if (!isAuthenticated) {
    return <Loading />;
  }
  return <WebPayments />;
};

export default Page;
