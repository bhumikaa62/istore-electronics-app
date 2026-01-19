import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
export default function Category()
{
    const token = useSelector(store=>store.user.value.token);
    const [categories,setCategories] = useState([]);

    const tittleRef = useRef();
    const descRef = useRef();

    useEffect(()=>{
        loadCategory();
    },[])

    const  loadCategory = async()=>{
        const res = await fetch("http://localhost:8989/istore/listcate");
        const response = await res.json();
        setCategories(response.data);
    };

    const save = async(evt)=>{
        evt.preventDefault();
        const ob = {
            tittle : tittleRef.current.value,
            desc : descRef.current.value
        };
        const res = await fetch("http://localhost:8989/auth/admin/savecate",{
            method : 'POST',
            headers:{
                "Content-Type" : 'application/json',
                "Authorization" : `Bearer ${token}`
            },
            body : JSON.stringify(ob)
        });
        const response = await res.json();
         console.log("SAVE RESPONSE ", response);
         console.log("TOKEN ", token);

        if(response.status)
            setCategories([...categories,response.data]);
    }

    return <div>
        <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
            <h1 className="h1">Category Records</h1>
        </div>

<form onSubmit={save}>
        <div className="row mt-3">
                <div className="col-xl-4 col-lg-4">
                    <input type="text" className="form-control" ref={tittleRef} placeholder="Title" required/>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <input type="text" className="form-control" ref={descRef} placeholder="Description"/>
                </div>
                <div className="col-xl-2 col-lg-2">
                   <button className="btn btn-success">Save</button>
                </div>
        </div>
</form>
        <table className="table mt-3">
            <thead>
                <th>S. No.</th>
                <th>Title</th>
                <th>Description</th>
            </thead>
            <tbody>
                {categories.map((cate,index)=><tr>
                    <td>{index+1}</td>
                    <td>{cate.tittle}</td>
                    <td>{cate.desc}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
    </div>
}