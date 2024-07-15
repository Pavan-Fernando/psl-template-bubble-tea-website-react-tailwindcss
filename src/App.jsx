import Hero from "./component/Hero/Hero";
import Products from "./component/Products/Products";
import Shop from "./component/ShopDetails/Shop";


function App() {

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Products />
      <Shop />
    </div>
  )
}

export default App;