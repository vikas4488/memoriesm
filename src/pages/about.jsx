import React,{ useState } from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lan from "../pages/language";
import Pop from "../pages/popup";
import Themep,{colorProcess} from "../pages/themeprocess";
import Nav from "../pages/navbar";

function DataEntry(){
    const t=colorProcess();
    var fname=localStorage.getItem('fname');
    var lname=localStorage.getItem('lname');
    var address=localStorage.getItem('address');
    var phone=localStorage.getItem('phone');
return(
<div className="super-block" style={t.bgclr}>
<div class="mainwrap" style={t.cardclr,{marginLeft: "5%"}}>

<div class="creatorpic"></div>

    <div class="aboutwrap">
<div class="dat"><Lan text="creator_name_label"/></div>
<div class="formwrap2" style={{display:"block"}}><hr className="hrclass"/>
<Lan text="creator_name_details"/>
</div>
</div>

<div class="aboutwrap">
<div class="dat"><Lan text="c_location_label"/></div>
<div class="formwrap2" style={{display:"block"}}><hr className="hrclass"/>
<Lan text="c_location_details"/>
</div>
</div>

<div class="aboutwrap">
<div class="dat"><Lan text="aim_of_app"/></div>
<div class="formwrap2"style={{display:"block"}}><hr className="hrclass"/>
<Lan text="aim_of_app_details"/>
</div>
</div>

<div class="aboutwrap">
<div class="dat"><Lan text="services_of_app"/></div>
<div class="formwrap2"style={{display:"block"}}><hr className="hrclass"/>
<Lan text="services_of_app_details"/>
</div>
</div>

<div class="aboutwrap">
<div class="dat"><Lan text=""/></div>
<div class="formwrap2"style={{display:"block"}}><hr className="hrclass"/>
<Lan text="thanks_label"/>
</div>
</div>

</div>		  
			</div>
);
}
export default DataEntry;