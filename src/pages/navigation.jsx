import React,{ useState,useEffect } from 'react';
import {Link,useHistory} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lan from "../pages/language";
import Pop from "../pages/popup";
import Themep,{colorProcess} from "../pages/themeprocess";
import {Redirect} from 'react-router-dom/BrowserRouter';
import {GoogleLogout} from 'react-google-login';
import {auth} from '../App';
function Navigation(){
    const history=useHistory();
    var fname=localStorage.getItem('fname');
    var lname=localStorage.getItem('lname');
    function logout(e){
        localStorage.setItem('loggedin',0);
        auth.signout(() => {
            history.push("/");
          });
    }
    const t=colorProcess();
    return(
        <div>
<div className="pagehead"><div><Lan text="welcome_mr"/></div><div>{fname} {lname}</div></div>
<Link to="/viewrecords">
<div id="viewrecords" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8viewrecords.png')}/>
        <span className="menu-label">
            <Lan text="view_records"/>
        </span>
</div>
</Link>
<Link to="/dataentry">
<div id="dataentrypage" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8addentry.png')}/>
        <span className="menu-label">
            <Lan text="add_entry"/>
        </span>
</div>
</Link>
<Link to="/userprofile">
<div id="profilepage" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8profile.png')}/>
        <span className="menu-label">
            <Lan text="profile_label"/>
        </span>
</div>
</Link>
<Link to="/viewrecords">
<div id="themepage" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8theme.png')}/>
        <span className="menu-label">
            <Lan text="theme_label"/>
        </span>
</div>
</Link>
<Link to="/contactadmin">
<form style={{display:"inline"}} action="{% url 'contactadmin' %}" method="post" >

<input type="hidden" value="0000" name="touser"/>
<input type="hidden" value="admin" name="name"/>
<div id="contactadmin" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8creator.png')}/>
        <span className="menu-label">
            <Lan text="contact_admin"/>
        </span>
</div>
</form>
</Link>
<Link to="/viewrecords">
<div id="verifyuser" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8friends.png')}/>
        <span className="menu-label">
            <Lan text="share_friend"/>
        </span>
</div>
</Link>
<Link to="/help">
<div id="help" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8help.png')}/>
        <span className="menu-label">
            <Lan text="help_label"/>
        </span>
</div>
</Link>
<Link to="/about">
<div id="aboutit" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8about.png')}/>
        <span className="menu-label">
            <Lan text="about_label"/>
        </span>
</div>
</Link>
<GoogleLogout
clientId="232621114578-iihtvv9gmfrhdn3b3usimcd0sdnq7l5o.apps.googleusercontent.com"
onLogoutSuccess={logout}
className="googleLogout"
>
<div id="logout" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8logout.png')}/>
        <span className="menu-label">
            <Lan text="logout_label"/>
        </span>
</div>
</GoogleLogout>
</div>     
    );
}
export default Navigation;