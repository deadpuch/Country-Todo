import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/home/home.jsx";
import Todo from "./component/Todo/Todo.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country from "./component/country/Country.jsx";
import Errorpage from "./component/errorpage/errorpage.jsx";
import Single from "./component/SinglePage/Single.jsx";
import { createContext, useState } from "react";
import RootLayout from "./RootLayout.jsx";

export const DataContext = createContext(null);

function App() {
  const [select, setselect] = useState(null);
  return (
    <>
      <DataContext.Provider value={{ select, setselect }}>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="Todo" element={<Todo />} />
              <Route path="Country" element={<Country />} />
              <Route path="/single/:code" element={<Single />} />
              <Route path="*" element={<Errorpage />} />
            </Route>
            
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

export default App;
