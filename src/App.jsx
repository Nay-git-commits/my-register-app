// 1. Change the import from 'BrowserRouter' to 'HashRouter'
import { HashRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import SubmitRegister from "./submitRegister";

function App() {
  return (
    // 2. Use HashRouter instead (Remove the 'basename' part, it's not needed here)
    <HashRouter>
      <Routes>
        <Route path="/" element={<SubmitRegister />} />
        <Route path="/old" element={<Register />} />
      </Routes>
    </HashRouter>
  );
}

export default App;