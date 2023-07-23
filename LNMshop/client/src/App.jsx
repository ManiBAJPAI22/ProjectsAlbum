import BuySell from "./pages/BuySell";
import Carpool from "./pages/CarPool";
import Home from "./pages/Home";
import Recycle from "./pages/Recycle";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Recent from "./pages/Recent";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import RegisterSeller from "./pages/RegisterSeller"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProduct from "./pages/ListProduct";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/carpool' element={<Carpool />} />
				<Route path='/recycle' element={<Recycle />} />
				<Route path='/shop' element={<BuySell />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/recent' element={<Recent />} />
				<Route path='/checkout' element={<Checkout />} />
				<Route path='/product' element={<Product />} />
				<Route path='/RegisterSeller' element={<RegisterSeller />} />
				<Route path='/ListProduct' element={<ListProduct />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
