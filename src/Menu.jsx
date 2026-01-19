
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { delUserData } from "./redux/UserSlice";


export default function Menu()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user=useSelector(store=>store.user.value)

    return <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">

            <Link className="navbar-brand text-success logo h1 align-self-center" to="/">
                iStore
            </Link>

            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div className="flex-fill">
                   
                {user.islogin? user.role=='admin'?<AdminMenu/>:<UserMenu/>:<WebMenu/>}

                </div>
                <div className="navbar align-self-center d-flex">
                    <Link className="nav-icon position-relative text-decoration-none" to="/cart">
                        <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                        <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                    </Link>
                    &nbsp;

                    {user.islogin?<button onClick={()=>{
                        dispatch(delUserData());
                          navigate("/")
                    }
                }
                    className="nav-icon position-relative text-decoration-none">
                       logout
                    </button>:<Link className="nav-icon position-relative text-decoration-none" to="/login">
                        <i className="fa fa-fw fa-user text-dark mr-3"></i>
                    </Link>}
                </div>
            </div>

        </div>
    </nav>
}

function WebMenu()
{
    return  <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/about">About</Link>
                        </li>                        
                        <li className="nav-item">
                             <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
}

function UserMenu()
{
    return  <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/customer/home">Home</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/customer/profile">Profile</Link>
                        </li>                        
                        <li className="nav-item">
                             <Link className="nav-link" to="/customer/orders">Orders</Link>
                        </li>
                    </ul>
}

function AdminMenu()
{
    return  <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/home">Home</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/admin/users">Users</Link>
                        </li>                        
                        <li className="nav-item">
                             <Link className="nav-link" to="/admin/category">Category</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/admin/product">Product</Link>
                        </li>
                    </ul>
}