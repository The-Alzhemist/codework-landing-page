import HeroSection from "../features/Home/HeroSection/HeroSection";
import AboutUs from "../features/Home/AboutUs/AboutUs";
import OurClient from "../features/Home/OurPartner/OurPartner";
import ContactUs from "../features/Home/ContactUs/ContactUs";
import AppLayout from "../components/AppLayout/AppLayout";
import OurProduct from "../features/Home/OurProduct/OurProduct";
import OurService from "../features/Home/OurService/OurService";
import Head from 'next/head'
import MetaTag from "@/components/seo/MetaTag";

export default function Home() {
  return (
    <>
     <MetaTag image="/seo/codework-meta-cover-v2.jpg" />

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

