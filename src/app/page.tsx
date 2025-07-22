import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import TestimonialSlider from "./components/Testimonials/Testimonials";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="pt-20">
        <Hero/>
        <Services/>
        <About/>
        <CaseStudies/>
        <Testimonials/>
        <ContactUs/>
      </main>
      <Footer/>
    </>
  );
}
