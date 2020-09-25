import React from 'react';
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
            <nav>
                <div className="nav-wrapper white">
                <Link to="/" clLinkssName="brand-lLinkgo left">4Tex</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/signin">Signin</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
                </div>
            </nav>
    )
}

export default Navbar