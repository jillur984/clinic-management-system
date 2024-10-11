import Loginpage from "./page/Loginpage";
import Navbar from "./components/Navbar";
import SignupPage from "./page/SignupPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
