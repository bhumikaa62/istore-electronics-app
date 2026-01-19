import { useRef } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Register()
{

    const nameRef=useRef();
    const mailRef=useRef();
    const passRef=useRef();

    const register = async(evt)=>{
       evt.preventDefault();
       const ob={
           name : nameRef.current.value,
           email : mailRef.current.value,
           password : passRef.current.value
     }
     
     const response = await fetch("http://localhost:8989/istore/register",
        {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(ob)
        }
     );
     const res = await response.json();
    if(res.status)
    {
        toast.success(res.msg)
        evt.target.reset();
    }
    else
        toast.error(res.msg);
    }

    return <div>
        <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
            <h1 className="h1">User Register</h1>
        </div>
    </div>
   
    <div className="container py-5">
        <div className="row py-5">
            <form className="col-md-9 m-auto" onSubmit={register} role="form">
                <div className="row">
                    <div className="form-group col-md-6 mb-3">
                        <label for="inputname">Name</label>
                        <input type="text" ref={nameRef} className="form-control mt-1" id="name" name="name" placeholder="Name" required/>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <label for="inputemail">Email</label>
                        <input type="email" ref={mailRef} className="form-control mt-1" id="email" name="email" placeholder="Email" required/>
                    </div>
                </div>

                 <div className="row">
                    <div className="form-group col-md-6 mb-3">
                        <label for="inputname">Password</label>
                        <input type="password" ref={passRef} className="form-control mt-1" id="name" name="name" placeholder="Password" required/>
                    </div>
                    <div className="form-group col-md-6 mb-3">
                        <div className="col text-end mt-2">
                        <button type="submit" className="btn btn-success btn-lg px-3">Let’s Register</button>
                    </div>
                    </div>
                    <div className="col text-end mt-2">
                        <Link to="/login"> <b>Login Here</b></Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
    
    </div>
}