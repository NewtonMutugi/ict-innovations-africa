import SigninPage from "./SigninPage";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Sign In | ICT Innovations Admin Dashboard",
  description: "Signin page",
};

const Page = () => {
  return (
    <div>
      <SigninPage />
    </div>
  );
};

export default Page;
