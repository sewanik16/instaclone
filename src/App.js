
import LandingPage  from './landingPage';
import Post from "./post"
import Form from './form';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/post" element={<Post/>}></Route>
          <Route path="/form" element={<Form/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
