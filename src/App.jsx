import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { token } = useContext(AuthContext);
  // console.log('token from app',token);
    return (
        <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={token ? <Home /> :<Login/>} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
        </BrowserRouter>
    );
}

export default App;
