"use client";

import { useState, useEffect } from "react";
import PageContainer from "@/app/admin/dashboard/components/container/PageContainer";
import DashboardCard from "@/app/admin/dashboard/components/shared/DashboardCard";
import { BACKEND_URL } from "@/app/constants";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TextField,
  Button,
} from "@mui/material";
import { Select, MenuItem } from "@mui/material";

const PaymentsTable = () => {
  const [payments, setPayments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(24);
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    status: "",
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/paystack/payments`);
        const data = await res.json();
        setPayments(data);
        setFilteredPayments(data);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };
    fetchPayments();
  }, []);

  const applyFilters = () => {
    const { name, email, status } = filters;
    const filtered = payments.filter((payment) => {
      return (
        (!name || payment.name.toLowerCase().includes(name.toLowerCase())) &&
        (!email || payment.email.toLowerCase().includes(email.toLowerCase())) &&
        (!status || payment.status.toLowerCase() === status.toLowerCase())
      );
    });
    setFilteredPayments(filtered);
    setCurrentPage(1);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const totalRecords = filteredPayments.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const paginatedPayments = filteredPayments.slice(
    startIndex,
    startIndex + recordsPerPage,
  );

  const handlePageChange = (page) => setCurrentPage(page);

  const handleRecordsChange = (e) => {
    setRecordsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  return (
    <PageContainer title="Payments" description="This is the Payments page">
      <Typography variant="h1" className="mb-4 ml-4">
        All Payments
      </Typography>

      <DashboardCard>
        <div className="flex flex-col justify-between">
          <div className="flex">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="mx-4 mt-4 justify-end rounded-lg bg-primary px-6 py-2 text-white hover:bg-primary/90"
            >
              Filter
            </button>
          </div>
          {showFilters && (
            <Box mb={2} display="flex" gap={2} margin={2} flexWrap="wrap">
              <input
                type="text"
                placeholder="Filter by Name"
                className="form-control rounded-xl"
                style={{
                  width: "200px",
                  padding: "6px 8px",
                  fontSize: "0.875rem",
                  height: "40px",
                }}
                onChange={(e) => handleFilterChange("name", e.target.value)}
              />
              <input
                type="email"
                placeholder="Filter by Email"
                className="form-control rounded-xl"
                style={{
                  width: "200px",
                  padding: "6px 8px",
                  fontSize: "0.875rem",
                  height: "40px",
                }}
                onChange={(e) => handleFilterChange("email", e.target.value)}
              />
              <input
                type="text"
                placeholder="Filter by Status"
                className="form-control rounded-xl"
                style={{
                  width: "200px",
                  padding: "6px 8px",
                  fontSize: "0.875rem",
                  height: "40px",
                }}
                onChange={(e) => handleFilterChange("status", e.target.value)}
              />
              <button
                className="rounded-lg bg-primary px-6 py-2 text-white hover:bg-primary/90"
                onClick={applyFilters}
              >
                Apply Filters
              </button>
            </Box>
          )}

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Payment Reference</TableCell>
                <TableCell>Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {totalRecords > 0 ? (
                paginatedPayments.map((payment, index) => (
                  <TableRow key={payment.id}>
                    <TableCell>{startIndex + index + 1}</TableCell>
                    <TableCell>{payment.name}</TableCell>
                    <TableCell>{payment.email}</TableCell>
                    <TableCell>{payment.phone}</TableCell>
                    <TableCell>{payment.country}</TableCell>
                    <TableCell>{payment.amount}</TableCell>
                    <TableCell>
                      <Chip
                        label={payment.status}
                        color={
                          payment.status === "Completed" ? "success" : "error"
                        }
                      />
                    </TableCell>
                    <TableCell>{payment.paymentReference}</TableCell>
                    <TableCell>
                      {new Date(payment.created_at).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={9}>
                    <Typography textAlign="center">No data found</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Select onChange={handleRecordsChange} value={recordsPerPage}>
              <MenuItem value={24}>Show 24</MenuItem>
              <MenuItem value={50}>Show 50</MenuItem>
              <MenuItem value={totalRecords}>Show All</MenuItem>
            </Select>
            <Box>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  style={{
                    margin: "0 5px",
                    padding: "8px 16px",
                    backgroundColor:
                      currentPage === i + 1 ? "#1976d2" : "#e0e0e0",
                    color: currentPage === i + 1 ? "#fff" : "#000",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </Box>
          </Box>
        </div>
      </DashboardCard>
    </PageContainer>
  );
};

export default PaymentsTable;
