import React, { useContext } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Stack,
  IconButton,
  Badge,
  Button,
  useTheme,
  Typography,
} from "@mui/material";
import Link from "next/link";
// import { ThemeContext } from "@/app/utils/ThemeContext";
import Profile from "./Profile";
import { IconBellRinging, IconMenu } from "@tabler/icons-react";
import ThemeToggler from "@/components/Header/ThemeToggler";
import Swal from "sweetalert2";

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  // const { toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();
  // Get the user name from the local storage
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <Box>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          backdropFilter: "blur(4px)",
          transition: "background 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            color: theme.palette.text.primary,
            transition: "background 0.3s ease",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileSidebar}
            sx={{
              display: {
                lg: "none",
                xs: "inline",
              },
            }}
          >
            <IconMenu width={theme.spacing(2.5)} height={theme.spacing(2.5)} />
          </IconButton>

          {/* <IconButton
            size="large"
            aria-label="show 11 new notifications"
            color="inherit"
            aria-controls="msgs-menu"
            aria-haspopup="true"
          >
            <Badge variant="dot" color="primary">
              <IconBellRinging size={theme.spacing(2.625)} stroke="1.5" />
            </Badge>
          </IconButton> */}
          <Box flexGrow={1} />
          <Stack spacing={1} direction="row" alignItems="center">
            <ThemeToggler />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hello 👋 {user.first_name || "Guest"}
            </Typography>
            <button
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                Swal.fire({
                  icon: "success",
                  title: "Logout successful",
                  // showConfirmButton: false,
                  timer: 1500,
                });
                setTimeout(() => {
                  window.location.href = "/admin/signin";
                }, 1500);
              }}
              className="mx-4 mt-4 rounded-lg bg-primary px-6 py-2 text-white hover:bg-primary/90"
            >
              Logout
            </button>

            <Profile />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
