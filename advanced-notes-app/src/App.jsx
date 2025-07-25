import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* مسیرهای بعدی رو بعداً اضافه می‌کنیم */}
      </Routes>
    </Router>
  );
};

export default App;