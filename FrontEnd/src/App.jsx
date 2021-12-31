import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/pages/Home';

const App = () => {
    return (
        <div className="template-color-1">
            {/* Start Header */}
            <Header />
            {/* End Header */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
};

export default App;
