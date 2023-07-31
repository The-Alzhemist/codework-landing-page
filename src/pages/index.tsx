import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import HelloSection from '../../components/NavigationBar/Home/HelloSection'
import AboutUs from '../../components/NavigationBar/Home/AboutUs'
import OurService from '../../components/NavigationBar/Home/OurService'
import OurClient from '../../components/NavigationBar/Home/OurClient'
import OurMember from '../../components/NavigationBar/Home/OurMember'
import ContactUs from '../../components/NavigationBar/Home/ContactUs'
import Footer from '../../components/NavigationBar/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
    <NavigationBar/>
    <HelloSection/>
    <AboutUs/>
    <OurService/>
    <OurClient/>
    <OurMember/>
    <ContactUs/>
    <Footer/>
   </>
  )
}
