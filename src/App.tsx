import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blogs } from "./pages/Blogs";
import { Blog } from "./pages/Blog";
import { UserDetails } from "./pages/UserDetails";
import { Create } from "./pages/Create";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs/edit/:id" element={<Blog type="edit" />} />
          <Route path="/blogs/:id" element={<Blog type="publish" />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Create />} />
          <Route path="/profile/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
