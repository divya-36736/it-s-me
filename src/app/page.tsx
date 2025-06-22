'use client'
import Navbar from "./componets/Navbar";
import Header from "./componets/Header";
import About from "./componets/About";
import Services from "./componets/Services";
import Work from "./componets/Work";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About/>
    <Services />
    <Work/>
    <Contact />
    <Footer/>
    </>
  );
}
