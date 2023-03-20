import logo from './logo.svg';

import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import SignIn from './Components/SignIn/SignIn';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import Post from './Components/Post/Post';
import CreatePost from './Components/CreatePost/Createpost';


function App() {
  return (
    <div className="App">

      {/* <Sidebar />
      <Topbar /> */}
      {/* <Post /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Signin' element={<SignIn />} />
      </Routes>
      <CreatePost />

    </div>
  );
}

export default App;
