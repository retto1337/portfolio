import { useState } from "react";
import {AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false); 
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 6 } }}>
         
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#570b83" }}>
            My Portfolio
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                sx={navButtonStyles}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#570b83" }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 220, p: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton onClick={() => handleScroll(item.id)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

const navButtonStyles = {
  color: "#570b83",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    color: "#dd2476",
    backgroundColor: "transparent",
    transform: "scale(1.1)",
  },
  transition: "all 0.3s ease",
};
