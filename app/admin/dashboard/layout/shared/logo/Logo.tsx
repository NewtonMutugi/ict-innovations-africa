import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/admin/dashboard">
      <h2 className="mx-5 mt-5  flex-wrap text-2xl font-bold text-primary dark:text-white">
        ICTInnovations.africa <br />
      </h2>
      <div className="mx-5 text-lg text-gray-400 dark:text-gray-500">
        Admin Dashboard
      </div>
    </Link>
  );
};

export default Logo;
