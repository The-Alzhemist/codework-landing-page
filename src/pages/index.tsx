import HeroSection from "@/features/HomePage/HeroSection/HeroSection";
import AppLayout from "../components/AppLayout/AppLayout";
import MetaTag from "@/components/MetaTag/MetaTag";

// import HeroSection from "../components/Home/HeroSection/HeroSection";
// import AboutUs from "../components/Home/AboutUs/AboutUs";
// import OurClient from "../components/Home/OurPartner/OurPartner";
// import ContactUs from "../components/Home/ContactUs/ContactUs";
// import OurProduct from "../components/Home/OurProduct/OurProduct";
// import OurService from "../components/Home/OurService/OurService";


import AboutUs from "@/features/HomePage/AboutUs/AboutUs";
import OurService from "@/features/HomePage/OurService/OurService";
import OurProduct from "@/features/HomePage/OurProduct/OurProduct";
import OurPartner from "@/features/HomePage/OurPartner/OurPartner";
import ContactHomeSection from "@/features/HomePage/ContactHomeSection/ContactHomeSection";


export default function Home() {
  return (
    <>
     <MetaTag image="/seo/matatag-home.png" />

      <AppLayout>
        <HeroSection />
        <OurPartner />
        <AboutUs />
        <OurService />
        <OurProduct />
        <ContactHomeSection />
      </AppLayout>     
    </>
  );
}

