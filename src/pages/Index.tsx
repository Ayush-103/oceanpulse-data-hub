import Header from "../components/Header";
import Hero from "../components/Hero";
import ResearchAreas from "../components/ResearchAreas";
import DataPlatform from "../components/DataPlatform";
import About from "../components/About";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ResearchAreas />
        <DataPlatform />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
