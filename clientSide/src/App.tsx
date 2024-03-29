import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/homePage";
import CreatePost from "./views/createPost";
import Explore from "./views/explore";
import Favorites from "./views/favorites";
import Login from "./views/login";
import MyPost from "./views/myPost";
import SignUp from "./views/signUp";
import ViewPost from "./views/viewPost";
import { LoggedUserProvider } from "./context/loggedUserContext";

function App() {
  
  return (
    <>
    <LoggedUserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/CreatePost" element={<CreatePost />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/MyPost" element={<MyPost />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ViewPost" element={<ViewPost />} />
        </Routes>
      </BrowserRouter>
      </LoggedUserProvider>
    </>
  );
}

export default App;
