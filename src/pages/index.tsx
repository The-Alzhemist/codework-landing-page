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
     <MetaTag/>

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

