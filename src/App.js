import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Chats from "./pages/Chats";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
