import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./Navbar";
import Banner from "./Banner";
import Service from "./Service";
import Counter from "./Counter";
import Blog from "./Blog";
import Footer from "./Footer";
import Copyright from "./Copyright";
function App() {
 
  return (
   
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Service></Service>
      <Counter></Counter>
      <Blog></Blog>
      <Footer></Footer>
      <Copyright></Copyright>
    </>
  );
}

export default App;

{
  /* <img src={Logo} alt="logo" /> */
}

// import Logo from "./img/logo.png"
