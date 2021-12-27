import { Route } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';
import Home from './components/user/Home';

const App = () => {
    return (
        <>
            <Route path="/" exact element={<Home />} />
            <Route path="/admin" element={<Dashboard />} />
        </>
    );
};

export default App;
