import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";         // Your old file
import SubmitRegister from "./submitRegister"; // Your NEW file

function App() {
  return (
    <BrowserRouter basename="/my-register-app">
      <Routes>
        {/* Point the default path "/" to your NEW assignment (SubmitRegister).
           This ensures the link you submit shows the correct homework.
        */}
        <Route path="/" element={<SubmitRegister />} />
        
        {/* Optional: You can keep the old assignment on a separate path 
           if you want to see it at .../my-register-app/old
        */}
        <Route path="/old" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;