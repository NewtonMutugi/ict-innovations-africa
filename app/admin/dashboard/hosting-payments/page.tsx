"use client";
import useAuth from "../../UseAuth";
import Loading from "../loading";
import HostingPayments from "./HostingPayments";

const Page = () => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Loading />;
  }
  return <HostingPayments />;
};

export default Page;
