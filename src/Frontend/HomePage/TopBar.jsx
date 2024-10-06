import { Link } from 'react-router-dom';
import './topbar.css';

export default function TopBar() {
  const user = false; // Change this dynamically based on auth

  return (
    <div className='top'>
      <div className="topleft">
        <i className="topicons fa-brands fa-instagram"></i>
        <i className="topicons fa-brands fa-tiktok"></i>
        <i className="topicons fa-brands fa-facebook"></i>
        <i className="topicons fa-brands fa-twitter"></i>
        <i className="topicons fa-brands fa-pinterest"></i>
      </div>

      <div className="topcentre">
        <ul className="toplist">
          <li className="toplistitems"><Link className="link" to="/">HOME</Link></li>
          <li className="toplistitems"><Link className="link" to="/writeQuote">WRITE</Link></li>
          <li className="toplistitems"><Link className="link" to="/posts">READ</Link></li>
          <li className="toplistitems"><Link className="link" to="/contact">CONTACT</Link></li>
          <li className="toplistitems"><Link className="link" to="/about">ABOUT</Link></li>
          {user && <li className="toplistitems">LOG_OUT</li>}
        </ul>
      </div>

      <div className="topright">
        {user ? (
          <img className='topimage' src='./assests/topimg.jpg' alt='Profile' />
        ) : (
          <ul className="toplist">
            <li className="toplistitems"><Link className="link" to='/login'>LOG_IN</Link></li>
            <li className='toplistitems'><Link className="link" to='/register'>REGISTER</Link></li>
          </ul>
        )}
        <i className="topsearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
