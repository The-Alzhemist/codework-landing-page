import HeroSection from "../../components/Home/HeroSection/HeroSection";
import AboutUs from "../../components/Home/AboutUs/AboutUs";
import OurClient from "../../components/Home/OurClient/OurClient";
import ContactUs from "../../components/Home/ContactUs/ContactUs";
import AppLayout from "../../components/AppLayout/AppLayout";
import OurProduct from "../../components/Home/OurProduct/OurProduct";
import OurService from "../../components/Home/OurService/OurService";

export default function Home() {
  return (
    <>
      <AppLayout>
        <HeroSection />
        <OurClient />
        <AboutUs />
        <OurService />
        <OurProduct />
        <ContactUs />
      </AppLayout>
    </>
  );
}

