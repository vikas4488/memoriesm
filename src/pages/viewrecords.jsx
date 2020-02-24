import React,{ useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lan,{lan} from "../pages/language";
import Pop from "../pages/popup";
import Themep,{colorProcess} from "../pages/themeprocess";
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const t=colorProcess();
function ViewRecords(){
    const [re,setRe]=useState([]);
    useEffect(() => {
        getRecords();
      },[]);
    async function getRecords(){
        const response=await fetch(
                //'http://127.0.0.1:8000/react/fetchr?format=json',{
                'https://vikas4488.pythonanywhere.com/react/fetchr?format=json',{
                    //mode: 'no-cors',
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userId:localStorage.getItem('userId'),
                    }),
                }
            );
            console.log('response:'+response.status);
            const res=await response.json();
                setRe(res);
      }
    return(
        <div className="super-block" style={t.bgclr} >
            
            <SearchDiv records={re}/>
            {re.map((u,i)=>(
                <MainRecord key={i} record={u}></MainRecord>
            ))
            }
        </div>
    );
}
function SearchDiv(props){
    const records=props.records;
    const[aniclass,setaniclass]=useState("redclass");
    const fcomponent1=  <form className={aniclass} action="" method="post" >
    <div  id="on-date-div" style={{display:"block"}}>
        <div className="searchlabel " style={t.labelclr} ><Lan text="search_specific_date"/></div>
        <input className="icolor" style={t.ipclr}  type="date" value="" name="specificdate"/>
      </div>
      <div className="searchbtn" style={t.btncnf,{ margin:"7px"}}><Lan text="search_label"/></div>
      </form>

const fcomponent2=  <form className={aniclass} action="" method="post" >
    <div  id="date-range-div">
      <div className="searchlabel" style={t.labelclr} ><span style={{marginLeft: "10%"}}><Lan text="start_date"/></span><span style={{float: "right",marginRight: "20%"}}><Lan text="end_date"/></span></div>
      <input className="icolor " style={t.ipclr} value=""  type="date" name="date1"/>
      <input className="icolor " style={t.ipclr} value=""  type="date" name="date2"/>
     </div>
     <div className="searchbtn" style={t.btncnf,{ margin:"7px"}}><Lan text="search_label"/></div>
     </form>
    
    const fcomponent3= <form className={aniclass} action="" method="post" >
    <div  id="on-word-div">
      <div className="searchlabel " style={t.labelclr} ><Lan text="search_by_keyword"/></div>
     <input className="icolor" style={t.ipclr}  type="text" placeHolder="type here" name="searchkey"/>
     </div>
     <div className="searchbtn" style={t.btncnf,{ margin:"7px"}}><Lan text="search_label"/></div>
     </form>
     function showSearch(e,comp){
        var el = document.getElementsByClassName('redclass')[0];
        el.style.animation = 'none';
        var s=el.offsetHeight; /* trigger reflow */
        el.style.animation = null; 
        setfcomponent(eval(comp));
    }
    const [Fcomponent,setfcomponent]=useState(fcomponent1);
    
    return(   
        <div className="searchdiv">

        <div className="search-wrap">
   <div className="search-menu-wrap">
   <div className="search-nav" onClick={e => showSearch(e,"fcomponent1")} style={t.btnpro} id="on-date">date</div>
   <div className="search-nav" onClick={e => showSearch(e,"fcomponent2")} style={t.btnpro}   id="date-range">date range</div>
   <div className="search-nav" onClick={e => showSearch(e,"fcomponent3")} style={t.btnpro}  id="on-word">words</div>
   </div>
</div>
       <div className="searchwrap " style={t.cardclr} >
       {Fcomponent}
           </div>
        {records.length==0 &&
    <form action="" method="post" >
       
       <div className="searchwrap" style={{paddingBottom: "16px"}} >
           {/* <div className="searchlabel"><Lan text="see_last_30"/></div> */}
            <button className="searchlabel"
           style={{width: "100%",background: "cornflowerblue",borderRadius: "5px", marginTop: "5px"}}>
               <Lan text="see_last_30"></Lan>see last 30 records
           </button>
        </div>
    </form>
    }
    </div>
    );
}

function MainRecord(props){
    const entry=props.record;
    
    function viewmore(e){
        if(e.target.parentElement.parentElement.parentElement.querySelector('.formwrap')!==null){
        var elAll=document.getElementsByClassName('formunwrap');
        if(elAll.length>0){
        document.getElementsByClassName('lant')[0].innerHTML=lan(1,"show_details");
        document.getElementsByClassName('lant')[0].className="lan";
        elAll[0].className="formwrap";
        }
        var el=e.target.parentElement.parentElement.parentElement.querySelector('.formwrap');
        if(el!==null){
        el.className="formunwrap";
        e.target.innerHTML=lan(1,"hide_details");
        e.target.className="lant";
        }
        }else{
        var elAll=document.getElementsByClassName('formunwrap');
        if(elAll.length>0){
        document.getElementsByClassName('lant')[0].innerHTML=lan(1,"show_details");
        document.getElementsByClassName('lant')[0].className="lan";
        elAll[0].className="formwrap";
        }
        }
    }
    return (
        <div> 
<div className="big-block" style={t.cardclr,{padding:"4%",marginTop:"3%",paddingBottom: "0px"}}>
                <div className="dat">{(new Date(entry.wdate)).toLocaleDateString('KOLKATA', { year: 'numeric', month: 'short', day: 'numeric',weekday: 'short',hour:'numeric'})} <span className="viewmore" onClick={e => viewmore(e)} style={t.btnpro} ><Lan text="show_details"/></span></div>
                <div className="formwrap">
                <form>                   
					<input type="hidden"name="wid"value={entry.id}/>
    <div className="editdiv smoothborder"><span className="reclabel "style={t.labelclr}><Lan text="work_date"/> :</span>
    <div className="tempData">{entry.wdate}</div>
    <input className="recordedit "style={t.ipclr} type="datetime-local"value={entry.wdate} name="wdate" readOnly/>
    </div>

<div className="editdiv smoothborder"><span className="reclabel"style={t.labelclr}><Lan text="attendance_label"/> :</span>
<div className="tempData">{entry.attendance}</div>
<input className="recordedit "style={t.ipclr}type="text"value={entry.attendance}name="attendance" readOnly/>
</div>

<div className="editdivblock smoothborder"><div className="reclabeldiv "style={t.labelclr}><Lan text="names_label"/> :</div>
<div className="tempData">{entry.names}</div>
<textarea className="recordeditdiv"style={t.ipclr,{height:"70px"}}  type="text" name="names" readOnly>{entry.names}</textarea>
</div>

<div style={{height:"150px"}} className="editdiv smoothborder"><div className="reclabeldiv"style={t.labelclr}><Lan text="work_details"/> :</div>
<div className="tempData">{entry.work}</div>
<textarea className="recordeditdiv"style={t.ipclr,{height:"120px"}} name="work" readOnly>{entry.work}</textarea>
</div>

					<div className="updatebtn"style={t.btnupd}>
						<Lan text="update_label"/>
						</div>
						<div className="editrecbtn "style={t.btncnf}><Lan text="edit_details"/></div>
					<div className="whatsappwrap"></div>
				</form>
				 </div>
                </div>
        </div>
    );
}

export default ViewRecords;