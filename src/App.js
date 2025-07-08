import "./App.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import Home from "./pages/Home";
import SearchedMovies from "./pages/SearchedMovies";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Provider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/search/:searchText/:page" element={<SearchedMovies />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
