import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Collection from './components/Collections/Collection';
import Pages from './components';
import About from './components/About/About';
import AllProducts from './components/nft/All-Nft/AllProducts';
import Category from './components/Category/Category';
import CreateNft from './components/Create-Nft/CreateNft';
import EditProfile from './components/Profile/Edit-Profile';
import Home from './components/Home';
import Profile from './components/Profile/Profile';
import SingleProduct from './components/nft/NFT-Details/NftDetails';
import Upload from './components/Upload/Upload';
import Wallet from './components/Wallet/Wallet';

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
