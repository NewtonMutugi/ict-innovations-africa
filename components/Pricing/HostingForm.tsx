import { BACKEND_URL } from "@/app/constants";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const HostingForm = ({ open, handleClose, id, packageName }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    hosting_plan_id: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedFormData = { ...formData, hosting_plan_id: Number(id) };
    const res = await fetch(`${BACKEND_URL}/api/initialize`, {
      method: "POST",
      body: JSON.stringify(updatedFormData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    localStorage.setItem("paymentReference", data.data.data.reference);
    window.location.href = data.data.data.authorization_url;
    handleClose();
  };

  useEffect(() => {
    const paymentReference = localStorage.getItem("paymentReference");
    if (paymentReference) {
      const fetchCallback = async () => {
        const res = await fetch(
          `${BACKEND_URL}/api/callback/${paymentReference}`,
        );
        const data = await res.json();
        if (data.status === "success") {
          Swal.fire({
            icon: "success",
            title: "Payment Successful",
            text: "Thank you for subscribing to our hosting service. You will receive an email shortly regarding your hosting activation.",
          });
          localStorage.removeItem("paymentReference");
        } else {
          Swal.fire({
            icon: "error",
            title: "Payment Failed",
            text: "An error occurred while processing your payment. Please try again.",
          });
          localStorage.removeItem("paymentReference");
        }
      };
      fetchCallback();
    }
  }, []);

  return (
    <div>
      <Dialog
        open={open}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleClose();
          }
        }}
        disableEscapeKeyDown
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        {/* <DialogTitle>Purchase {packageName}</DialogTitle> */}
        <Typography variant="h3" component="h2" className="p-4">
          Proceed to purchase {packageName}
        </Typography>
        <DialogContent>
          <DialogContentText>
            To subscribe to this package, fill in the following details.
          </DialogContentText>

          <div className="m-2">
            <label
              htmlFor="full_name"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleInputChange}
              placeholder="Provide your full name"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              required
            />
          </div>
          <div className="m-2">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Provide your email"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              required
            />
          </div>
          <div className="m-2">
            <label
              htmlFor="phone"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Provide your phone number"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              required
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} type="submit">
            Purchase
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HostingForm;
