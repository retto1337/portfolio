import { Box, Typography } from "@mui/material";

const Footer = () => {

  return (
    <Box sx={{ py: 4, textAlign: "center", background: "linear-gradient(135deg, #2b1055, #7597de)", color: "white" }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Andrejs Kuzminskis. All rights reserved.
      </Typography>
    </Box>
  );
}
export default Footer;