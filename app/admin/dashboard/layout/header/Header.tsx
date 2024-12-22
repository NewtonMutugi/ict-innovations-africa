import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Stack,
  IconButton,
  Badge,
  Button,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import Link from "next/link";
// components
import Profile from "./Profile";
import { IconBellRinging, IconMenu } from "@tabler/icons-react";
import ThemeToggler from "@/components/Header/ThemeToggler";

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  let theme = useTheme();

  return (
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
          <IconMenu width="20" height="20" />
        </IconButton>

        <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
        >
          <Badge variant="dot" color="primary">
            <IconBellRinging size="21" stroke="1.5" />
          </Badge>
        </IconButton>
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <ThemeToggler />
          <Button
            variant="contained"
            component={Link}
            href="/authentication/login"
            disableElevation
            color="primary"
          >
            Login
          </Button>
          <Profile />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
