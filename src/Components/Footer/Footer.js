import React from "react";
import footer_sprite from '../../Images/footer_sprite.png'
import './Footer.css'
function Footer() {
    const divStyle = {
        background: 'url(' + footer_sprite + ') 0 0',
        display:"inline-block",
        backgroundPosition: "0 0",
        width: "58px",
        height: "56px",
        verticalAlign:"middle"
      };
    const rightFooterStyle={
        background: 'url(' + footer_sprite + ') 0 0',
        display:"inline-block",
        backgroundPosition: "-1px -64px",
        width: "195px",
        height: "54px"
    }  
  return (

      <div id="footer">
        <div id="footer_1">
        <div className="left_footer">
        <div className="footer-sprite" style={divStyle}></div>
        <span className="footer_address">1155 E. 60th Street, Chicago, IL 60637</span>
        <span className="footer_contact">
        <span style={{color:"white",fontWeight:"bold"}}>GSSHelp@norc.org</span>
        </span>
        </div>
    <div className="right_footer">
    <a href="http://www.norc.org">
    <div className="footer-sprite" style={rightFooterStyle}>
    </div>
    </a>
    </div>
    </div>
    <div id="footer_2">
    <ul id="footer_links">
    <li>
    <a href="/pages/show?page=gss%2Fgss_data">Quick Downloads</a>
    </li>
    <li>
    <a href="/pages/show?page=gss%2Ffaq">FAQ</a>
    </li>
    <li>
    <a href="/pages/show?page=gss%2Fterms">Terms and Conditions</a>
    </li>
    <li>
    <a href="/pages/show?page=gss%2Fprivacy">Privacy</a>
    </li>
    <li>
    <a href="/pages/show?page=gss%2Fcontact">Contact</a>
    </li>
    </ul>
    <span id="copyright_info">
    © Copyright 2020 NORC at the University of Chicago
    <span>
    <span style={{"position":"relative",left:"450px",bottom:"11px"}}></span>
    </span>
    </span>
    </div>

</div>
  );
}

export default Footer;