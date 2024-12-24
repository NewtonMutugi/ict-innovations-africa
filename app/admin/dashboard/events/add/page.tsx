"use client";
import useAuth from "@/app/admin/UseAuth";
import CreateForm from "./CreateForm";

const CreateEventForm = () => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }
  return <CreateForm />;
};

export default CreateEventForm;
