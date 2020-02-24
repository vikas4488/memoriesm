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
<form className="big-block " style={t.cardclr,{padding: "5%"}}>
                    <input  type="hidden" value="com" readonly/>
					<div class="editdiv smoothborder"><span class="reclabel"><Lan text="first_name"/> : </span>
					<div class="tempData">{fname}</div>
					<input class="dataedit" style={t.ipclr}  type="text" value={fname} name="fname" readonly/>  </div>
                    <div class="editdiv smoothborder"><span class="reclabel"><Lan text="last_name"/> :</span>
                    <div class="tempData" style={t.ipclr}>{lname}</div>
                    <input class="dataedit" style={t.ipclr}  type="text" value={lname} name="lname"  readonly/></div>
                    <div class="editdiv smoothborder"><span class="reclabel"><Lan text="place_label"/>  :</span>
                    <div class="tempData">{address}</div>
                    <input class="dataedit" style={t.ipclr} type="text" value={address} name="place"  readonly/> </div>
                    <div class="editdiv smoothborder"><span class="reclabel" style={{width:"37%"}}><Lan text="phone_number"/> :</span>
                    <div class="tempData ">{phone}</div>
                    <input class="dataeditnon" style={t.ipclr}  type="text" value={phone} name="pnumber"  readonly/> </div>
					<button class="updatebtn2" style={t.btnupd}>
						<span class="lan update_label"></span>
					</button>
						<div class="editrecbtn" style={t.btncnf}><Lan text="edit_details"/></div>
					
				 </form>			  
			</div>
);
}
export default DataEntry;