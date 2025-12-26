import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";

function App() {
  return (
    // import.meta.env.BASE_URL reads the 'base' value from vite.config.js
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;