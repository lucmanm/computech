import { Header, IconNavigation } from "../pages/frontend/Header/";
import { Products } from "../pages/frontend/Products";
import { Footer } from "../pages/frontend/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      <IconNavigation />
      {/* <Products /> */}
      <Footer />
    </div>
  );
}

export default App;
