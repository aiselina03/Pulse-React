import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AddPage from "./pages/AddPage";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";  
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/addPage" element={<AddPage/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path="/basket" element={<Basket/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
