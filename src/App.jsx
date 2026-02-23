import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Cameron&apos;s Portfolio</title>
          <link rel="canonical" href="https://cameronvandermeersch.com/" />
          <meta name="description" content="Develop with me!" />
        </Helmet>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
