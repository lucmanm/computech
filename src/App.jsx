import { Header } from "../pages/frontend/Header/";
import { Products, IconNavigation } from "../pages/frontend/";
import { Footer } from "../pages/frontend/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      <IconNavigation />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
