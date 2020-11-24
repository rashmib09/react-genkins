import React from 'react';
import { NavLink } from 'react-router-dom';
import gss from '../../Images/gss.png'

function handleSignOut(){
    
    localStorage.clear();
  }
function Header(props) {
    return (
        <div>

        <div id="menu">
        <div className="navbar or-top-nav" role="navigation">
        <div className="menu-logo-container">
        <div className="navbar-header logo">
        <span className="main-title">
        <a href="/"><img src={gss}/>
        </a>
        </span>
        </div>
        <div className="navbar-collapse pull-right navlinks">
        <ul className="nav navbar-nav">
        <li>
        <a href="/pages/show?page=gss%2Ffeatures">Features</a>
        </li>
        <li>
        <a href="/pages/show?page=gss%2Fmedia_room">Media Room</a>
        </li>
        <li>
        <a href="/pages/show?page=gss%2Fhelp">Help and Resources</a>
        </li>
        <li className="gray">
        <span>Explore GSS Data</span>
        <a href="/variables/vfilter">Search GSS Variables</a>
        </li>
        <li className="gray">
        <a href="/trends">Key Trends</a>
        </li>
        </ul>
        <div className="gray"></div>
        </div>
        <div className="user-menu">
        <ul className="nav navbar-nav">
        <li className="light_text">
        <a href="/pages/show?page=gss%2Fabout">About</a>
        </li>
        <li className="light_text">
        <NavLink 
            to='/user/contact/'
            exact
           >Contact</NavLink>
        </li>
        <li className="light_text">
        <a href="/user/sign_up/">Register</a>
        </li>
        <li className="light_text">
        <a className="orange" id="sign_in_link" data-toggle="modal" data-target="#sign_in_modal" href="/sign_in">Sign In</a>
        </li>
        </ul>
        </div>
        </div>
        
        </div>
        </div>
        {/* <div className="modal basic-modal auto-submit-modal" id="sign_in_modal">
        <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
        <h4 className="modal-title">Sign In</h4>
        </div>
        </div>
        </div>
        </div> */}
        </div>
        
    );
  }
  export default Header;