import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function Product()
{
     const token = useSelector(store=>store.user.value.token);
     const [products,setProducts] = useState([]);
     const [categories,setCategories] = useState([]);

      const nameRef = useRef();
      const cateRef = useRef();
       const descRef = useRef();
      const priceRef = useRef();
      const fileRef = useRef();

    useEffect(()=>{
        loadProducts();
        loadCategory();
    },[]);
    
    const  loadCategory = async()=>{
        const res = await fetch("http://localhost:8989/istore/listcate");
        const response = await res.json();
        setCategories(response.data);
    };

    const  loadProducts = async()=>{
        const res = await fetch("http://localhost:8989/istore/listproduct");
        const response = await res.json();
        setProducts(response.data);
    };
    const save = async(evt)=>{
        evt.preventDefault();

        const frm = new FormData();
        frm.append("pname" , nameRef.current.value);
        frm.append("category",cateRef.current.value);
        frm.append("desc", descRef.current.value);
        frm.append("price",priceRef.current.value);
        frm.append("image" , fileRef.current.files[0]);

        const res = await fetch("http://localhost:8989/auth/admin/saveproduct",{
            method : 'POST',
            headers:{
                "Authorization" : `Bearer ${token}`
            },
            body : frm
        });
        const response = await res.json();
        console.log(response);
        if(response.status)
            setProducts([...products,response.data]);

    }
    return <div>
        <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
            <h1 className="h1">Product Records</h1>
        </div>

        <form onSubmit={save}>
        <div className="row mt-3">
                <div className="col-xl-3 col-lg-3">
                    <input type="text" className="form-control" ref={nameRef} placeholder="Product Name" required/>
                </div>
                <div className="col-xl-3 col-lg-3">
                    <select className="form-control" ref={cateRef}required>
                        <option value="">Choose Category</option>
                        {categories.map(ob=><option value={ob.id}>{ob.tittle}</option>)}
                    </select>    
                </div>
                <div className="col-xl-6 col-lg-6">
                    <input type="text" className="form-control" ref={descRef} placeholder="Description"/>
                </div>
        </div>
        <div className="row mt-3">
                <div className="col-xl-6 col-lg-6">
                    <input type="number" className="form-control" ref={priceRef} placeholder="Product Price" required/>
                </div>
                <div className="col-xl-4 col-lg-4">
                    <input type="file" className="form-control" ref={fileRef} required/>
                </div>
                <div className="col-xl-2 col-lg-2">
                   <button className="btn btn-success">Save</button>
                </div>
        </div>
  </form>

         <table className="table mt-3">
            <thead>
                <th>S. No.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
            </thead>
            <tbody>
                {products.map((cate,index)=><tr>
                    <td>{index+1}</td>
                    <td>
                        <img src={'http://localhost:8989'+cate.image} height={150}/>
                    </td>
                    <td>{cate.pname}</td>
                    <td>{cate.desc}</td>
                    <td>{cate.price}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
    </div>
}