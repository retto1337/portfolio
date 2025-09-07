import { Container, Typography, Grid, Paper, Box, Button, Stack } from "@mui/material";

const projects = [
  { 
    title: "Project 1 – Material UI", 
    desc: "A responsive project built with Material UI components.", 
    link: "https://github.com/retto1337/BakalauraDarbs/tree/master" 
  },
  
];

export default function Projects() {
  return (
    <Box id="projects"
      sx={{ py: 12, px: 2,  background: "linear-gradient(135deg, #2b1055, #7597de)",color: "white",}} >
      <Container maxWidth="lg">

        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom sx={{ mb: 6 }}>
          Projects
        </Typography>
        
        <Grid container spacing={4}>
          {projects.map((p, i) => (
            <Grid item xs={12} md={4} key={i}>

              <Paper elevation={6}
                sx={{p: 4, borderRadius: 4, height: "100%",  display: "flex", flexDirection: "column",  justifyContent: "space-between",
                  background: "linear-gradient(135deg, #1f1c2c, #928dab)", color: "white",  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {  transform: "translateY(-8px)", boxShadow: "0 12px 24px rgba(0,0,0,0.3)",},}}>
              
                <Stack spacing={2}>

                  <Typography variant="h6" fontWeight="bold">
                    {p.title}
                  </Typography>

                  <Typography variant="body2" sx={{ flexGrow: 1, opacity: 0.9 }}>
                    {p.desc}
                  </Typography>

                  <Button href={p.link} target="_blank" variant="contained"
                    sx={{ mt: "auto", borderRadius: 3, textTransform: "none", fontWeight: "bold", background: "black",
                     "&:hover": { background: "#333" },}} >
                    View Project
                  </Button>

                </Stack>

              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

