import React,{ useState } from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lan from "../pages/language";
import Pop from "../pages/popup";
import Themep,{colorProcess} from "../pages/themeprocess";
function Navigation(){
    const t=colorProcess();
    return(
        <div>
<div className="pagehead"><div><Lan text="welcome_mr"/></div><div>{"vikas"} {"kumar"}</div></div>

<div id="viewrecords" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8viewrecords.png')}/>
        <span className="menu-label">
            <Lan text="view_records"/>
        </span>
</div>
<div id="dataentrypage" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8addentry.png')}/>
        <span className="menu-label">
            <Lan text="add_entry"/>
        </span>
</div>
<div id="profilepage" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8profile.png')}/>
        <span className="menu-label">
            <Lan text="profile_label"/>
        </span>
</div>
<div id="themepage" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8theme.png')}/>
        <span className="menu-label">
            <Lan text="theme_label"/>
        </span>
</div>
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
<div id="verifyuser" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8friends.png')}/>
        <span className="menu-label">
            <Lan text="share_friend"/>
        </span>
</div>
<div id="help" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8help.png')}/>
        <span className="menu-label">
            <Lan text="help_label"/>
        </span>
</div>
<div id="aboutit" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8about.png')}/>
        <span className="menu-label">
            <Lan text="about_label"/>
        </span>
</div>
<div id="logout" className="boxes">
 <img className="menu-icon" src={require('../media/diary/icons8logout.png')}/>
        <span className="menu-label">
            <Lan text="logout_label"/>
        </span>
</div>
</div>     
    );
}
export default Navigation;