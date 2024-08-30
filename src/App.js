import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from './component/Navbar/Nav.jsx'
import Home from './component/home/home.jsx';
import Todo from './component/Todo/Todo.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Country from './component/country/Country.jsx';
import Errorpage from './component/errorpage/errorpage.jsx';
function App() {
  return (
    <>
      
    <BrowserRouter>
    <Routes>

      <Route path='/Todo' element={<Todo/>}/>
      <Route path='/' element={ <Home/>}/>
      <Route path='/Country' element={ <Country/>}/>
      <Route path='/err' element={ <Errorpage/>}/>

    </Routes>
    </BrowserRouter>

 
    </>


  )
}

export default App;

