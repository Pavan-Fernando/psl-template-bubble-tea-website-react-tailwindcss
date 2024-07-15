import ContactUs from "./component/ContactUs/Shop";
import Hero from "./component/Hero/Hero";
import Products from "./component/Products/Products";


function App() {

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Products />
      <ContactUs />
    </div>
  )
}

export default App;