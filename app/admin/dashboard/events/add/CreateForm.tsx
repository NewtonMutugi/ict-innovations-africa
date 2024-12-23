"use client";
import { RemEvent } from "@/types/remEvent";
import { Add, CloudUpload, Delete } from "@mui/icons-material";
import {
  Box,
  Chip,
  Grid,
  IconButton,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";
import Image from "next/image";
import useAuth from "@/app/admin/UseAuth";
import { BACKEND_URL } from "@/app/constants";

const CreateForm = () => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }

  const [formData, setFormData] = useState({
    title: "",
    paragraph: "",
    image: "",
    venue: "",
    type: "",
    eventDate: "",
    description: "",
    registrationLink: "",
    tags: [{ tagName: "" }],
    eventImages: [],
  });
  const theme = useTheme();
  const router = useRouter();

  const [eventImages, setEventImages] = useState<File[]>([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagChange = (index, value) => {
    const updatedTags = [...formData.tags];
    updatedTags[index].tagName = value;
    setFormData((prev) => ({ ...prev, tags: updatedTags }));
  };

  const handleAddTag = () => {
    setFormData((prev) => ({ ...prev, tags: [...prev.tags, { tagName: "" }] }));
  };

  const handleRemoveTag = (index) => {
    const updatedTags = formData.tags.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, tags: updatedTags }));
  };

  const onDrop = (acceptedFiles) => {
    // Checker whether acceptedFiles are images
    const allImages = acceptedFiles.every((file) =>
      file.type.includes("image"),
    );
    if (!allImages) {
      alert("Please upload only image files");
      return;
    }
    setEventImages((prev) => [...prev, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const handleRemoveImage = (index) => {
    const updatedImages = eventImages.filter((_, i) => i !== index);
    setEventImages(updatedImages);
  };

  const handleImageTitleChange = (e, index) => {
    e.preventDefault();
    const updatedImages = [...formData.eventImages];
    if (!updatedImages[index]) {
      updatedImages[index] = {}; // Initialize if undefined
    }
    updatedImages[index].imageTitle = e.target.value;
    setFormData((prev) => ({
      ...prev,
      eventImages: updatedImages,
    }));
  };

  const handleImageDescriptionChange = (e, index) => {
    e.preventDefault();
    const updatedImages = [...formData.eventImages];
    if (!updatedImages[index]) {
      updatedImages[index] = {}; // Initialize if undefined
    }
    updatedImages[index].imageDescription = e.target.value;
    setFormData((prev) => ({
      ...prev,
      eventImages: updatedImages,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Submit clicked:", formData);

    // Map images to include imageUrl field
    const eventImagesData = eventImages.map((file, index) => ({
      imageTitle: formData.eventImages[index]?.imageTitle || "",
      imageDescription: formData.eventImages[index]?.imageDescription || "",
      imageUrl: "", // Placeholder for now
    }));

    // Append form data
    const data = new FormData();
    const updatedFormData = {
      ...formData,
      eventImages: eventImagesData,
    };

    data.append("event", JSON.stringify(updatedFormData)); // Add JSON payload

    // Append each image file
    eventImages.forEach((file) => data.append("images", file));

    try {
      // Make API request
      const response = await fetch(`${BACKEND_URL}/api/event`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: "Event created successfully",
          icon: "success",
        });
        const responseData = await response.json();
        console.log(responseData);
        router.push("/admin/dashboard/events");
      } else {
        throw new Error("Failed to create event");
      }
    } catch (error) {
      console.error("Error creating event:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to create event. Please try again",
        icon: "error",
      });
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: theme.spacing(3),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography variant="h1" sx={{ mb: 5 }}>
        {" "}
        Create New Event
      </Typography>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Provide a title for the event"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <label
              htmlFor="paragraph"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Brief Description
            </label>
            <input
              name="paragraph"
              value={formData.paragraph}
              onChange={handleInputChange}
              placeholder="Type a brief description of the event"
              className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              required
            />
          </Grid>

          <Grid item xs={6}>
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Event Venue
            </label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleInputChange}
              placeholder="Enter your venue"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              required
            />
          </Grid>

          <Grid item xs={6}>
            <label
              htmlFor="type"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Event Type
            </label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              placeholder="Enter your type"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              required
            />
          </Grid>

          <Grid item xs={6}>
            <label
              htmlFor="eventDate"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Event Date
            </label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleInputChange}
              placeholder="Enter your event date"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              required
            />
          </Grid>

          <Grid item xs={6}>
            <label
              htmlFor="registrationLink"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Registration Link
            </label>
            <input
              type="url"
              name="registrationLink"
              value={formData.registrationLink}
              onChange={handleInputChange}
              placeholder="Enter your registration link"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <label
              htmlFor="description"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Description
            </label>
            <textarea
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter your description"
              className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              required
            ></textarea>
          </Grid>

          <Grid item xs={12}>
            <label
              htmlFor="tags"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Tags
            </label>
            <Box display="flex" flexWrap="wrap" gap={theme.spacing(2)}>
              {formData.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={
                    <input
                      type="text"
                      name="tagName"
                      value={tag.tagName}
                      onChange={(e) => handleTagChange(index, e.target.value)}
                      placeholder="Enter tag"
                      className="h-5 rounded-lg border border-stroke  bg-[#FCFCFC] text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#121723] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      required
                    />
                  }
                  onDelete={() => handleRemoveTag(index)}
                  sx={{ backgroundColor: theme.palette.background.default }}
                />
              ))}
              <IconButton color="primary" onClick={handleAddTag}>
                <Add />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
              Event Images
            </Typography>
            <div
              {...getRootProps({
                className: "border-dashed border-2 rounded-lg cursor-pointer",
              })}
              style={{
                borderColor: theme.palette.divider,
                padding: theme.spacing(2),
              }}
            >
              <input {...getInputProps()} />
              <CloudUpload fontSize="large" />
              <Typography>
                Drag & drop images here, or click to select files
              </Typography>
            </div>
            <Box display="flex" flexWrap="wrap" gap={theme.spacing(2)} mt={2}>
              {eventImages.map((image, index) => (
                <Box key={index} sx={{ position: "relative" }}>
                  <Image
                    src={URL.createObjectURL(image)}
                    alt={`Event Image ${index}`}
                    style={{
                      height: theme.spacing(12),
                      width: theme.spacing(12),
                      borderRadius: theme.shape.borderRadius,
                      objectFit: "cover",
                    }}
                  />
                  {/* Add Image Title */}
                  <div className="mt-2 flex flex-col gap-2">
                    <input
                      type="text"
                      name="imageTitle"
                      value={formData.eventImages[index]?.imageTitle || ""}
                      onChange={(e) => handleImageTitleChange(e, index)}
                      placeholder="Image Title"
                      className="w-full rounded-lg border border-stroke bg-[#FCFCFC] text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#121723] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                    {/* Add Image description */}
                    <textarea
                      // type="text"
                      rows={3}
                      name="imageDescription"
                      value={
                        formData.eventImages[index]?.imageDescription || ""
                      }
                      onChange={(e) => handleImageDescriptionChange(e, index)}
                      placeholder="Image Description"
                      className="w-full rounded-lg border border-stroke bg-[#FCFCFC] text-sm text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#121723] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    ></textarea>
                  </div>

                  <IconButton
                    size="small"
                    sx={{
                      position: "absolute",
                      top: theme.spacing(0.5),
                      right: theme.spacing(0.5),
                      backgroundColor: theme.palette.background.paper,
                    }}
                    onClick={() => handleRemoveImage(index)}
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-3 text-base font-medium text-white focus:shadow-none focus:outline-none"
            >
              Create Event
            </button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default CreateForm;
