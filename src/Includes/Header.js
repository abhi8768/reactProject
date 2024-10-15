import { Link } from 'react-router-dom';
import "./header.css";
import { useState } from 'react';

const Header = () => {

    const [showStatus, setShowStatus] = useState(false);

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href='#'  onClick={()=>setShowStatus(prev => !prev)} className="navbar-brand" >CRUD APPLICATION</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        showStatus == true ? (
                            <ul className="navbar-nav mr-auto" id="firstNav">
                                <li className="nav-item active">
                                    <Link to="" className="nav-link" >Home </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/create" className="nav-link" >Create</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/list" className="nav-link" >List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/add-search" className="nav-link" >Add and Search</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/parent-chield" className="nav-link" >Parent Chield</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/country-state" className="nav-link" >Country State</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/redux-thunk" className="nav-link" >Redux-Thunk</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/use-reducer" className="nav-link" >Use Reducer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/stopwatch" className="nav-link" >Stopwatch</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/button-color" className="nav-link" >Button Color</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/custom-hook" className="nav-link" >Custom Hook</Link>
                                </li>

                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li> */}

                            </ul>
                        ) : (
                            <ul className="navbar-nav mr-auto" id="secondNav">
                                <li className="nav-item active">
                                    <Link to="" className="nav-link" >Home </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/my-app" className="nav-link" >myApp </Link>
                                </li>
                            </ul>
                        )
                    }










                </div>
            </nav>





        </div>
    );
}

export default Header;