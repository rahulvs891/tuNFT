import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Chats from "./pages/Chats";
import Create from "./pages/Create";
import Trending from "./pages/Trending";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chats />} />
          <Route path="/create" element={<Create />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
