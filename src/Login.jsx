import { useRef } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { addUserData } from "./redux/UserSlice";
import { useDispatch } from "react-redux";

export default function Login()
{

    const mailRef = useRef();
    const passRef = useRef();
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (evt)=>{
       evt.preventDefault();
       const ob = {
        email : mailRef.current.value,
        password : passRef.current.value
       }
       const response = await fetch("http://localhost:8989/istore/login",
        {
            method: 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(ob)
        }
       )
       const res =await response.json();
       if(res.status){
        dispatch(addUserData(res.data))
        toast.success(res.msg)
        navigate(`/${res.data.role}/home`)

       }
       else{
        toast.error(res.msg)
       }
    }

    return <div>
        <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
            <h1 className="h1">User Login</h1>
        </div>
    </div>
   
    <div className="container py-5">
        <div className="row py-5">
            <form className="col-md-9 m-auto" onSubmit={login} role="form">
                <div className="row">                   
                    <div className="form-group col-md-6 mb-3">
                        <label for="inputemail">Email</label>
                        <input type="email" ref={mailRef} className="form-control mt-1" id="email" name="email" placeholder="Email" required/>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <label for="inputsubject">Password</label>
                    <input type="password" ref={passRef} className="form-control mt-1" id="subject" name="subject" placeholder="Password" required/>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col text-end mt-2">
                        New User -- <Link to="/register"> <b>Register Here</b></Link>
                    </div>
                    <div className="col text-end mt-2">
                        <button type="submit" className="btn btn-success btn-lg px-3">Let’s Connect</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    
    </div>
}