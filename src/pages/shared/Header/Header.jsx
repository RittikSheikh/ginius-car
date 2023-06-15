import logo from "../../../assets/logo/logo.svg";
import { Link } from 'react-router-dom';
import { BsHandbag, } from 'react-icons/bs';
import { HiOutlineSearch } from 'react-icons/hi';
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {

    const {user, userLogOut} = useContext(AuthContext);

    const handleLogOut = () => {
        userLogOut()
        .then(() => console.log('user log out'))
        .catch(err => console.log(err))
    }

    const navMenus = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Services</Link></li>
        <li><Link to='/'>Blog</Link></li>
        <li><Link to='/'>Contact</Link></li>
        {
            user && user.uid ? <li onClick={handleLogOut}><Link>logout</Link></li> : <li><Link to='/login'>login</Link></li> 
        }
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-lg">
                        {navMenus}
                            <div className='flex justify-between mt-3'>
                            <BsHandbag className='w-6 h-6 mr-5'></BsHandbag>
                            <HiOutlineSearch className='w-6 h-6 mr-5'></HiOutlineSearch>
                            </div>
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-lg ">
                    {navMenus}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='hidden md:block'>
                    <div className='flex'>
                        <BsHandbag className='w-6 h-6 mr-5'></BsHandbag>
                        <HiOutlineSearch className='w-6 h-6 mr-5'></HiOutlineSearch>
                    </div>
                </div>
                <button className="btn btn-outline btn-secondary w-[170px] h-[56px]">Appointment</button>
            </div>
        </div>
    );
};

export default Header;