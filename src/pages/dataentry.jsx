import React,{ useState } from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lan from "../pages/language";
import Pop from "../pages/popup";
import Themep,{colorProcess} from "../pages/themeprocess";
import Nav from "../pages/navbar";

function DataEntry(){
    const t=colorProcess();
return(
   
    
    <div className="super-block" style={t.bgclr}>
        <Nav />
<div className="big-block " style={t.cardclr,{padding: "5%"}}>
				 <div className="formwrap" style={{display:"block"}}>
                <form action="{% url 'dataentry' %}" method="post" >		
    <div className="editdiv smoothborder"><span className="reclabel " style={t.labelclr}><Lan text="work_date"/> :</span> <input className="recordedit " style={t.ipclr} type="datetime-local"  name="wdate" style={{borderBottom:"1px solid",padding:"5px",outline:"none"}}/></div>
<div className="editdiv smoothborder"><span className="reclabel " style={t.labelclr}><Lan text="attendance_label"/> :</span><input className="recordedit " style={t.ipclr} type="text"  name="attendance" style={{borderBottom:"1px solid",padding:"5px",outline:"none"}} /> </div>
<div className="editdivblock smoothborder"><div className="reclabeldiv " style={t.labelclr}><Lan text="names_label"/> :</div><textarea className="recordeditdiv" style={t.ipclr,{height:"70px",border:"1px solid",padding:"5px",outline:"none"}}  type="text"  name="names" ></textarea></div>
<div style={{height:"150px"}} className="editdiv smoothborder"><div className="reclabeldiv " style={t.labelclr}><Lan text="work_details"/> :</div><textarea className="recordeditdiv " style={t.ipclr,{height:"120px",border:"1px solid",padding:"5px",outline:"none"}} name="work" ></textarea> </div>
					<button className="addentry " style={t.btncnf}><Lan text="add_entry"/></button>
				</form>
				 </div>
				 </div>			  
			</div>
);
}
export default DataEntry;