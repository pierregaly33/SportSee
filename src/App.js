import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profils from "./pages/Profils";
import Soon from "./pages/Soon";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="user/:userId" element={<Profils />} />
                <Route path="comingSoon" element={<Soon />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
