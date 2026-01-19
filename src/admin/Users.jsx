import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Users()
{
    const token = useSelector(store=>store.user.value.token);
     const [users,setUsers] = useState([]);
        useEffect(()=>{
            loadUsers();
        },[])
    
        const  loadUsers = async()=>{
            const res = await fetch("http://localhost:8989/auth/admin/listuser",{
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            });
            const response = await res.json();
            setUsers(response.data);
        };
    
    return <div>
        <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
            <h1 className="h1">User Records</h1>
        </div>
          <table className="table">
            <thead>
                <th>S. No.</th>
                <th>Name</th>
                <th>Email</th>
            </thead>
            <tbody>
                {users.map((cate,index)=><tr>
                    <td>{index+1}</td>
                    <td>{cate.name}</td>
                    <td>{cate.email}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
    </div>
}