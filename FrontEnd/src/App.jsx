import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pages from './components/pages';
import About from './components/pages/About';
import AllProducts from './components/pages/AllProducts';
import Home from './components/pages/Home';
import SingleProduct from './components/pages/Single-Product';
import Wallet from './components/Wallet';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Pages />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="products" element={<AllProducts />} />
                    <Route path="wallet" element={<Wallet />} />
                    <Route path="SingleProduct" element={<SingleProduct />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
