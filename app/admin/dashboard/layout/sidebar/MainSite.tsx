import { Box, Typography, Button, useTheme } from "@mui/material";
// import img1 from 'public/images/backgrounds/rocket.png';
import Image from "next/image";
import Link from "next/link";

export const Upgrade = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={2}
      sx={{
        m: 3,
        p: 3,
        backgroundColor: theme.palette.background.default,
        borderRadius: "8px",
        boxShadow: theme.shadows[4],
      }}
    >
      <>
        <Box>
          <Typography
            variant="h5"
            sx={{ width: "80px" }}
            fontSize="16px"
            mb={1}
          >
            View Main Website
          </Typography>
          <Button
            color="primary"
            target="_blank"
            disableElevation
            component={Link}
            href="/"
            variant="contained"
            aria-label="logout"
            size="small"
          >
            Go
          </Button>
        </Box>
        <Box mt="-35px">
          {/* <Image alt="Remy Sharp" src="" width={100} height={100} /> */}
        </Box>
      </>
    </Box>
  );
};
