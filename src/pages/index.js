import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Ribbon from "@/components/home/Ribbon";
import Communities from "@/components/home/Communities";
import Island from "@/components/home/Island";
import PaymentMethods from "@/components/home/PaymentMethods";
import FAQs from "@/components/home/FAQs";
import CallBackForm from "@/components/home/CallBackForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ribbon/>
      <Communities/>
      <Island/>
      <PaymentMethods/>
      <FAQs/>
      <CallBackForm/>
      <Footer/>
    </>
  );
}