import { Container, Typography, Box, Grid, Paper, LinearProgress } from "@mui/material";
import { Code, Storage, Brush, Devices, GitHub, Cloud } from "@mui/icons-material";

const skills = [
  { name: "React", icon: <Code fontSize="large" />, level: 50 },
  { name: "JavaScript", icon: <Brush fontSize="large" />, level: 50 },
  { name: "Material UI", icon: <Devices fontSize="large" />, level: 75 },
  { name: "Node.js", icon: <Storage fontSize="large" />, level: 40 },
  { name: "Git", icon: <GitHub fontSize="large" />, level: 45 },
  
];

export default function About() {
  return (
    <Box
      id="about"
      sx={{ py: 12, px: 2, background: "linear-gradient(135deg, #09265cff 0%, #d748e4ff 100%)", color: "white",}}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              I'm a frontend developer passionate about creating elegant and
              user-friendly web applications. Skilled in React, Material UI, and
              modern JavaScript. I love solving problems and bringing ideas to
              life on the web.
            </Typography>
            <Typography variant="body1">
              Outside of coding, I enjoy exploring new technologies, designing
              interfaces, and collaborating on exciting projects.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {skills.map((skill, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Paper
                    elevation={6}
                    sx={{ p: 3, borderRadius: 3, bgcolor: "rgba(255,255,255,0.1)", backdropFilter: "blur(6px)", transition: "0.3s",
                      "&:hover": { transform: "translateY(-6px)", bgcolor: "rgba(255,255,255,0.2)",},
                    }}
                  >
                    <Box sx={{ textAlign: "center", mb: 2 }}>
                      <Box sx={{ color: "#f50b0bff", mb: 1 }}>{skill.icon}</Box>
                      <Typography variant="subtitle1">{skill.name}</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{ height: 8, borderRadius: 5, backgroundColor: "rgba(255,255,255,0.2)",
                          "& .MuiLinearProgress-bar": {borderRadius: 5, backgroundColor: "#ce379cff",},
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ display: "block", textAlign: "right", mt: 0.5 }}
                    >
                      {skill.level}%
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
