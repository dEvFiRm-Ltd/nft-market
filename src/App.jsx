import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Collection from './components/Collections/Collection/Collection';
import Pages from './components/pages';
import About from './components/About';
import AllProducts from './components/nft/All-Nft/AllProducts';
import Category from './components/pages/Category';
import CreateNft from './components/pages/Create-Nft';
import EditProfile from './components/pages/Edit-Profile';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import SingleProduct from './components/nft/NFT-Details/NftDetails';
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
          <Route path='collection' element={<Collection />} />
          <Route path='profile' element={<Profile />} />
          <Route path='edit-profile' element={<EditProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
