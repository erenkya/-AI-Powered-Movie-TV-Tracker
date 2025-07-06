import "./App.css";
import { Provider } from "./components/ui/provider";
import Home from "./pages/Home";

function App() {
    return (
        <Provider>
            <Home />
        </Provider>
    );
}

export default App;
