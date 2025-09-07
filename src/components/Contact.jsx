import { useState } from "react";
import { Container, Typography, Box, Paper, Stack, Button } from "@mui/material";
import { Instagram, MailOutline } from "@mui/icons-material"; 
import { FaDiscord } from 'react-icons/fa';

export default function Contact() {
  const [isDiscord, setIsDiscord] = useState(true);
  
  const contacts = [
    {
      label: "Gmail",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=kuzminskis2013@gmail.com",
      icon: <MailOutline />,
      bgColor: "black",
      hoverColor: "#333333",
      textColor: "white",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/andrejs1k",
      icon: <Instagram />,
      bgColor: "#E1306C",
      hoverColor: "#C13584",
      textColor: "white",
    },
    {
      label: isDiscord ? "Discord" : "rettoowner",
      icon: <FaDiscord />,
      bgColor: "#686566",
      hoverColor: "#353336",
      textColor: "white",
      onClick: () => setIsDiscord(!isDiscord),
    },
  ];

  return (
    <Box id="contact" 
      sx={{ py: 12, textAlign: "center", px: 2, background: "linear-gradient(135deg, #09265c 0%, #d748e4 100%)", color: "white",}}>
      
      <Container maxWidth="sm">
        <Paper elevation={3}
          sx={{ p: 6, borderRadius: 4,  
            background: "linear-gradient(135deg, #a199cc 0%, #c125d6 100%)",  color: "white",}}>

          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Contact Me
          </Typography>

          <Typography sx={{ mb: 4, color: "text.secondary" }}>
            Let's connect! I'm open to collaborations and new opportunities.
          </Typography>

          <Stack spacing={2} alignItems="primary">
            {contacts.map((contact) => (
              <Button key={contact.label} variant="contained"  href={contact.href}  target="_blank" startIcon={contact.icon} onClick={contact.onClick}
                sx={{  borderRadius: 3,  px: 5,  py: 1.5,  fontWeight: "bold",  textTransform: "none",  background: contact.bgColor,   color: contact.textColor,
                  "&:hover": { background: contact.hoverColor, },}} >
                {contact.label}
              </Button>

            ))}
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
