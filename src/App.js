import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profils from "./pages/Profils";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="user/12" element={<Profils />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
