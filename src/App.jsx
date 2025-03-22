import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Signin,
  Signup,
  ApartRent,
  Landing,
  OwnerList,
  SeeFull,
} from "./pages";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/OwnerList" element={<OwnerList />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signin/Signup" element={<Signup />} />
        <Route path="ApartRent" element={<ApartRent />} />
        <Route path="/ApartRent/SeeFull" element={<SeeFull />} />
      </Routes>
    </Router>
  );
}

export default App;
