import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";

function App() {
  return (
    // ⚠️ CRITICAL: Add basename here ⚠️
    <BrowserRouter basename="/my-register-app">
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;