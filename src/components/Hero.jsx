import { Container, Typography, Box, Button, Stack } from "@mui/material";

export default function Hero() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      id="hero"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center",  justifyContent: "center",
        textAlign: "center", background: "linear-gradient(135deg, #2b1055 0%, #7597de 100%)",
        color: "white", px: 2,}} >

      <Container>
        <Typography variant="h2" fontWeight="bold">
          Hi, I'm Andrejs
        </Typography>
        <Typography
          variant="h5"
          sx={{ mt: 2, mb: 6, maxWidth: 600, mx: "auto", lineHeight: 1.5 }}
        >
          Frontend Developer specializing in React & modern web technologies.
        </Typography>

        <Stack direction="column" spacing={3} alignItems="center">
          <Button
            onClick={() => handleScroll("projects")}
            sx={{ background: "linear-gradient(90deg, #9293c4 0%, #6514c2 100%)",
              color: "white",  fontWeight: "bold",
              px: 6,  py: 1.5, borderRadius: 3,
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              textTransform: "none",
              "&:hover": {background: "linear-gradient(90deg, #c979e9 0%, #611f88 100%)",boxShadow: "0 6px 20px rgba(0,0,0,0.4)", },  }}>
            View My Work
          </Button>

          <Button
            component="a"
            href="/Andrejs Kuzminskis.cv.pdf"
            download="Andrejs Kuzminskis.cv.pdf"
            sx={{background: "linear-gradient(90deg, #9293c4 0%, #6514c2 100%)",
              color: "white",  fontWeight: "bold",
            px: 6, py: 1.5, borderRadius: 3,
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",textTransform: "none",
            "&:hover": { background: "linear-gradient(90deg, #c979e9 0%, #611f88 100%)",boxShadow: "0 6px 20px rgba(0,0,0,0.4)",}, }}
          >
            Download CV
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
