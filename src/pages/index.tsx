import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";
import Banner from "@/components/banner";
import Commitments from "@/components/commitments";
import WhyChooseUs from "@/components/whyChooseUs";
import OurBusiness from "@/components/ourBusinesses";
import Testimonials from "@/components/testimonials";
import News from "@/components/news";
import ConnectWithUs from "@/components/connectWithUs";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Commitments />
      <WhyChooseUs />
      <OurBusiness />
      <Testimonials />
      <News />
      <ConnectWithUs />
      <Footer />
    </>
  );
}
