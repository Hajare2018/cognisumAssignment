import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddOrder from "./components/AddOrder";
import Order from "./components/Order";
import Product from "./components/Product";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Order />} />
        <Route path="/add-order" element={<AddOrder />} />
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
