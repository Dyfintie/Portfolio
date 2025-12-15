import Nav from "../components/Nav";
import StickyCards from "../components/Sticky/StickyCards";
import AboutMe from "../components/AboutMe";
import GetinTouch from "../components/GetinTouch";
import Rota from "../components/RotatingTech";
import ParallaxSection from "@/components/ParallaxSection";

const page = () => {
  return (
    <>
      <Nav />

      {/* HOME / HERO */}
      <section id="home" className="min-h-screen bg-[#F5F5DC]">
        <StickyCards />
      </section>

      <section id="about " className="h-screen bg-black mb-0">
        <ParallaxSection speed={0.25}>
          <AboutMe />
        </ParallaxSection>
      </section>

      <section id="work " className="mb-0 bg-black ">
        <ParallaxSection speed={0.3}>
          <Rota />
        </ParallaxSection>
      </section>
      {/* CONTACT */}
      <section id="contact" className="bg-[#F5F5DC]">
        <ParallaxSection speed={0.3}>
          <GetinTouch />
        </ParallaxSection>
      </section>
    </>
  );
};

export default page;
