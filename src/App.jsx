import Banner from "./sections/Banner/Banner";
import Build from "./sections/Build/Build";
import Feature from "./sections/Feature/Feature";
import Footer from "./sections/Footer/Footer";
import Laptop from "./sections/Laptop/Laptop";
import Launch from "./sections/Launch/Launch";
import MobileFeature from "./sections/MobileFeature/MobileFeature";
import MultiDevices from "./sections/MultiDevices/MultiDevices";
import Partners from "./sections/Partners/Partners";

export default function App() {
  return <div style={{ fontFamily: "Roboto" }} className="overflow-hidden">
    <Banner />
    <Laptop />
    <Build />
    <Partners />
    <Feature />
    <MobileFeature />
    <MultiDevices />
    <Launch />
    <Footer />
  </div>;
}
