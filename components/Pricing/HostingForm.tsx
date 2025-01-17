import Loading from "@/app/admin/dashboard/loading";
import { BACKEND_URL } from "@/app/constants";
import { CloseOutlined } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";

const HostingForm = ({ open, handleClose, id, packageName }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    hosting_plan_id: null,
  });

  const resetForm = useCallback(() => {
    setFormData({
      full_name: "",
      email: "",
      phone: "",
      hosting_plan_id: null,
    });
  }, []);
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Basic validation
    if (
      !formData.full_name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }
    // Check for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please provide a valid email address");
      return;
    }
    setLoading(true);
    const updatedFormData = { ...formData, hosting_plan_id: Number(id) };
    const res = await fetch(`${BACKEND_URL}/api/hosting-payments/initialize`, {
      method: "POST",
      body: JSON.stringify(updatedFormData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    localStorage.setItem("paymentReference", data.data.data.reference);
    setLoading(false);
    window.location.href = data.data.data.authorization_url;
    handleClose();
  };

  useEffect(() => {
    const initializePaymentCallback = async () => {
      try {
        const paymentReference = localStorage.getItem("paymentReference");
        if (paymentReference) {
          const res = await fetch(
            `${BACKEND_URL}/api/hosting-payments/callback/${paymentReference}`,
          );

          if (res.ok) {
            Swal.fire({
              icon: "success",
              title: "Payment Successful",
              text: "Thank you for subscribing to our hosting service. You will receive an email shortly regarding your hosting activation.",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Payment Failed",
              text: "An error occurred while processing your payment. Please try again.",
            });
          }

          localStorage.removeItem("paymentReference");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Something went wrong: ${error.message}`,
        });
      } finally {
        resetForm();
        setLoading(false);
      }
    };

    initializePaymentCallback();
  }, []);
  return (
    <div>
      <Dialog
        open={open}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            resetForm();
            setLoading(false);
            handleClose();
          }
        }}
        disableEscapeKeyDown
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
        sx={{ borderRadius: "10px", padding: "20px", margin: "20px" }}
      >
        {/* <DialogTitle>Purchase {packageName}</DialogTitle> */}
        <CloseOutlined
          onClick={() => {
            resetForm();
            setLoading(false);
            handleClose();
          }}
          className="absolute right-2 top-2 m-2 cursor-pointer "
        />
        <Typography variant="h3" component="h2" className="mt-6 p-4">
          Proceed to purchase {packageName} package
        </Typography>
        <DialogContent>
          <DialogContentText>
            To purchase this package, fill in the following details.
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

        {loading ? (
          <DialogActions sx={{ justifyContent: "center", padding: "20px" }}>
            <Loading />
          </DialogActions>
        ) : (
          <DialogActions
            sx={{ justifyContent: "space-between", padding: "20px" }}
          >
            <button
              className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
              onClick={handleSubmit}
              type="submit"
            >
              Purchase now
            </button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
};

export default HostingForm;
