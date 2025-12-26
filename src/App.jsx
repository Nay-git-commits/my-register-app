import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";

function App() {
  return (
    // We add the specific basename here so the router matches the URL
    <BrowserRouter basename="/my-register-app">
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;