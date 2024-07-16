import Banner from "./component/Banner/Banner";
import ContactUs from "./component/ContactUs/Shop";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Products from "./component/Products/Products";


function App() {

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Products />
      <ContactUs />
      <Banner />
      <Footer />
    </div>
  )
}

export default App;