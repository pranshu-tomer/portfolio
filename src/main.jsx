import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider , createBrowserRouter , createRoutesFromElements , Route } from 'react-router-dom'
import HomeLayout from './Layouts/HomeLayout'
import ContentLayout from './Layouts/ContentLayout'

import About from './About'
import Projects from './Project'
import Contact from './Contact'
import './index.css'
import Certicate from './Certificate'


const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<HomeLayout/>}/>
        <Route path='' element={<ContentLayout/>}>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/certificate' element={<Certicate/>}/>
        </Route>
      </>
      
    )
)



// ReactDOM.createRoot(document.getElementById('root')).render(
//         <React.StrictMode>
//         <RouterProvider router={router}/>
//         </React.StrictMode>
// )

ReactDOM.render(
    <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>
    document.getElementById('root')
);
