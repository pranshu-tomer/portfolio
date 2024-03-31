import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider , createBrowserRouter , createRoutesFromElements , Route } from 'react-router-dom'
import HomeLayout from './Layouts/HomeLayout'
import ContentLayout from './Layouts/ContentLayout'

import About from './About/About'
import Projects from './Projects/Project'
import Contact from './contact/Contact'
import './index.css'
import Certicate from './Certificates/Certificate'


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



ReactDOM.createRoot(document.getElementById('root')).render(
        <RouterProvider router={router}/>
)
