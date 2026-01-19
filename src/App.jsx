import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Login from "./Login"
import Menu from "./Menu"
import { Route,Routes } from "react-router-dom"
import Register from "./Register"
import { Toaster } from "react-hot-toast"
import AdminHome from "./admin/AdminHome"
import CustomerHome from "./customer/CustomerHome"
import Category from "./admin/Category"
import Product from "./admin/Product"
import Users from "./admin/Users"
import Orders from "./customer/Orders"
import Profile from "./customer/Profile"

function App()
{
  return <div>
    <Toaster position="bottom-centre"/>
        <Menu/>
   <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>

           <Route path="/admin">
           <Route path='Home' element={<AdminHome/>}/>
           <Route path='Users' element={<Users/>}/>
           <Route path='Category' element={<Category/>}/>
           <Route path='Product' element={<Product/>}/>
           </Route>

          <Route path="/customer">
           <Route path='Home' element={<CustomerHome/>}/>
           <Route path='Orders' element={<Orders/>}/>
           <Route path='Profile' element={<Profile/>}/>
           </Route>

   </Routes>

  </div>
}

export default App