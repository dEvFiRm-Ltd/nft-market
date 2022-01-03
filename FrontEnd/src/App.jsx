import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pages from './components/pages';
import About from './components/pages/About';
import AllProducts from './components/pages/All-Nft';
import Category from './components/pages/Category';
import CreateNft from './components/pages/Form';
import Home from './components/pages/Home';
import SingleProduct from './components/pages/Single-Nft';
import Upload from './components/pages/Upload';
import Wallet from './components/Wallet';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Pages />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<AllProducts />} />
          <Route path='wallet' element={<Wallet />} />
          <Route path='details' element={<SingleProduct />} />
          <Route path='create' element={<CreateNft />} />
          <Route path='upload' element={<Upload />} />
          <Route path='category' element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
