import React,{ useState } from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lan from "../pages/language";
import Pop from "../pages/popup";
import Themep,{colorProcess} from "../pages/themeprocess";

function Nav(props){
	const t=colorProcess();
	var hm="";
	if(props.home=="yes")
	hm=<Link to="/"><div class="homewrap"><div class="homebtn"><img style={{height: "inherit"}} src={require('../media/diary/home.png')}/></div></div></Link>
    return(
			    <div className="mynav" style={t.navclr} >
					{hm}
					<div class="diary">DIARY</div>
			        <div class="lans">{"english"}</div>
			    </div>
        
    );
}
export default Nav;