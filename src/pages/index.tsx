
import { Inter } from "next/font/google";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import AboutUs from "../../components/Home/AboutUs/AboutUs";
import OurService from "../../components/Home/OurService";
import OurClient from "../../components/Home/OurClient";
import OurMember from "../../components/Home/OurMember";
import ContactUs from "../../components/Home/ContactUs";
import Footer from "../../components/AppLayout/components/Footer/Footer";
import AppLayout from "../../components/AppLayout/AppLayout";
import TeamCulture from "../../components/Home/TeamCulture/TeamCulture";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <AppLayout>
        <HeroSection />
        <AboutUs />
        <TeamCulture/>
        <OurService />
        <OurClient />
        <OurMember />
        <ContactUs />
      </AppLayout>
    </>
  );
}
