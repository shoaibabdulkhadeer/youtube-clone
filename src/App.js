import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Categories from './components/Categories';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './components/About';
import AddVideo from './components/AddVideo';
import Pagenotfound from './components/Pagenotfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        {/* //common components */}
        <Navbar />

        {/*Home Page*/}
        <Routes>
          <Route path='/' element={
            <div className="homePage">
              <Sidebar />
              <div>
                <Categories />
                <Home />
              </div>
            </div>} />

          {/*About*/}
          <Route path='/about' element={<About />}/> 

         {/* Add Video */}
         <Route path='/addvideo' element={<AddVideo />}/>
         
         {/* Page not Found */}
         <Route path='*' element={<Pagenotfound />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
