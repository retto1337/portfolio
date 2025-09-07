import {ThemeProvider, createTheme, CssBaseline,} from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";

const theme = createTheme({
  palette: {
    primary: { main: "#4f46e5" }, 
    secondary: { main: "#f59e0b" },
    background: { default: "#f9fafb" },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
