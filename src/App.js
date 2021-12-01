import React,{useState} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Dish } from './components/Dish'
import { Rating } from './components/Rating'
import './App.css'
import { Login } from './components/Login'
export const App = () => {
    const [token,setToken] = useState();
    if(!token){
        return<Login setToken={setToken}/>
    }
    return(
    <div className="wrapper">
      <h1>Rating Dishes</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dish" element={<Dish/>}>
          </Route>
          <Route path="/rating" element={<Rating/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
