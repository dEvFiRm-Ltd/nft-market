import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';
import Home from './components/user/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/admin" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
