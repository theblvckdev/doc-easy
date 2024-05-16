import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/home_page";
import SignUp from "./pages/auth/sign_up";
import Login from "./pages/auth/log_in";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
