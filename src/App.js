import { Route, RouterProvider, Routes, createRoutesFromElements } from 'react-router';
import './App.css';
import { Home } from './Components/Home';
import { Notfound } from './Components/Notfound';
import { Homepage } from './Components/Homepage';
import { Details, careerdetails } from './Components/Details';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Home/>}>
    <Route index element={<Homepage/>}/>
    <Route  path=':id' element={<Details/>} loader={careerdetails}/>
  </Route>
  <Route path='*' element={<Notfound/>}/>
  </Route>
  ))

function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
