import SigninPage from "./SigninPage";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Sign In | ICT Innovations Admin Dashboard",
  description: "Sign in page",
};

const Page = () => {
  return (
    <div>
      <SigninPage />
    </div>
  );
};

export default Page;
