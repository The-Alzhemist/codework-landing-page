import HeroSection from "../components/Home/HeroSection/HeroSection";
import AboutUs from "../components/Home/AboutUs/AboutUs";
import OurClient from "../components/Home/OurPartner/OurPartner";
import ContactUs from "../components/Home/ContactUs/ContactUs";
import AppLayout from "../components/AppLayout/AppLayout";
import OurProduct from "../components/Home/OurProduct/OurProduct";
import OurService from "../components/Home/OurService/OurService";
import Head from 'next/head'
import MetaTag from "@/components/seo/MetaTag";

export default function Home() {
  return (
    <>
     <MetaTag title="CodeWork Tech | Turning Ideas into Powerful Software Solutions" description="Bring innovation to life with our innovative software solutions. From UX/UI design to digital transformation consultant, we deliver excellence in scalability, reliability, and creativity."  />

      <AppLayout>
        <HeroSection />
        <AboutUs />
        <OurService />
        <OurProduct />
        <OurClient />
        <ContactUs />
      </AppLayout>
    </>
  );
}

