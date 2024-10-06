import Home from "./Frontend/HomePage/Home";
import Post from "./Frontend/HomePage/Post";
import Postss from "./Frontend/HomePage/Postss";
import TopBar from "./Frontend/HomePage/TopBar";
import Login from "./Frontend/loginPage/Login";
import Signle from "./Frontend/Quotes/Signle";
import SingleQuote from "./Frontend/Quotes/SingleQuote";
import Registre from "./Frontend/RegisterPage/Registre";
import Setting from "./Frontend/Settings/Setting";
import WriteQ from "./Frontend/WriteQuotes/WriteQ";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const currentUser = false; // Simulating a logged-in user for demo purposes

  return (
    <Router>
      <TopBar />      
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/register" element={currentUser ? <Home/> : <Registre/>} />
        <Route path="/login" element={currentUser ? <Home/> : <Login/>} />
        <Route path="/writeQuote" element={currentUser ? <WriteQ/> : <Login/>} />
        <Route path="/setting" element={currentUser ? <Setting/> : <Login/>} /> */}
        <Route path="/register" element={<Registre/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/writeQuote" element={ <WriteQ/>} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/post/:id" element={<SingleQuote/>} />
        <Route path="/posts" element={<Home/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
