import { useContext } from 'react';
import { loggedInUser } from '../App';
import { FiSearch } from "react-icons/fi";

function Header({ brand, handleOnClick }) {

    const user = useContext(loggedInUser);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark all">
            <a className="navbar-brand" href="#">{brand}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 ml-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><FiSearch className="search-icon" /></button>
                </form>
                <button type="button" className="btn btn-primary ml-2" data-toggle="modal" data-target="#exampleModal">
                    Oders now: <span className="badge badge-secondary badge-dark">{handleOnClick}</span>
                </button>
                {user ?
                    <button type="button" className="btn btn-dark text-light bg-transparent ml-2 ">{`${user.name}, ${user.age}`}</button>
                    : <button type="button" className="btn btn-primary ml-2" data-toggle="modal" data-target="#staticBackdrop">
                        Login
                    </button>}

            </div>
        </nav>
    )
}

export default Header;