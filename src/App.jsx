import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Homepage, LoginPage, RegisterPage } from "./pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
