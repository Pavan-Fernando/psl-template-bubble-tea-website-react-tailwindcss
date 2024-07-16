import Banner from "./component/Banner/Banner";
import ContactUs from "./component/ContactUs/Shop";
import Hero from "./component/Hero/Hero";
import Products from "./component/Products/Products";


function App() {

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Products />
      <ContactUs />
      <Banner />
    </div>
  )
}

export default App;