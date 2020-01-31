import React,{ useState } from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lan from "../pages/language";
import Pop from "../pages/popup";
import Themep,{colorProcess} from "../pages/themeprocess";

function Nav(){
    const t=colorProcess();

    return(
			    <div className="mynav" style={t.navclr} >
			        <div class="homewrap"><div class="homebtn"></div></div>
			        <div class="diary">DIARY</div>
			        <div class="lans">{"english"}</div>
			    </div>
        
    );
}
export default Nav;