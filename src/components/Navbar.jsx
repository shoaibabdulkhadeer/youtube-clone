import '../styles/navbar.css'
import Notificationicon from '../images/notifications.svg'
import Logo from '../images/youtube_logo_icon_167938.png'
import { RiVideoAddFill } from 'react-icons/ri';
import { BsFillMicFill } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="logo" >
                <RxHamburgerMenu size={25} className="hamburger" />
               <Link to="/">  <img src={Logo} width="100" alt="" /></Link>
            </div>

            <div className="searchbar">
                <div className='sborder'>
                    <input type="search" placeholder='Search' />
                    <BsSearch size={18} className="sicon" />
                </div>
                <BsFillMicFill size={22} className="mic" />
            </div>

            <div className="profile">
                 <Link to='/about'> About</Link>
                <Link to='/addvideo'>Add Video</Link>
                <RiVideoAddFill size={25} />
                <img src={Notificationicon} width="25" alt="" />
                <img src='/images/mydp.gif' width="30" alt="" className='logo' />
            </div>

        </div>
    );
}

export default Navbar;