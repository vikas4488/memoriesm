import React,{ useState } from 'react';
import {Link,useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lan from "../pages/language";
import Pop from "../pages/popup";
import GoogleLogin,{GoogleLogout} from 'react-google-login';
const anime={
    transition:'all 0.5s'
}
function Index(){
    const history=useHistory();
    const[popmsg,setPopmsg]=useState({msg:"blank",visible:"none"});
    const[user,setUser]=useState({});
    const[status,setStatus]=useState("noUser");
    const [logwidth,setLogwidth]=useState("58%");
    const [logleft,setLogleft]=useState("10%");
    const [regwidth,setRegwidth]=useState("20%");
    const [regleft,setRegleft]=useState("70%");
    const [regdisplay,setRegdisplay]=useState("none");
    const [logdisplay,setLogdisplay]=useState("block");
    const[userp,setuserp]=useState({userId:"gid",password:"gpass",email:"nomail",name:"noname"});
    const[regData,setRegData]=useState({fname:"",lname:"",gender:"male",pnumber:"",place:"",pass1:"",pass2:"",work:"diary"})
    
    function switchReg(e) {
        setLogwidth("58%");
        setLogleft("10%");   
        setRegwidth("20%");
        setRegleft("70%");  
        setRegdisplay("none");
        setLogdisplay("block");
      }
      function switchLog(e) {
        setLogwidth("20%");
        setLogleft("70%");   
        setRegwidth("58%");
        setRegleft("10%");   
        setRegdisplay("block");
        setLogdisplay("none");
      }
      function doRegister(){
        //console.log('user uuuuu '+user.fname)
        var flag=1;
        Object.entries(regData).map(([key,value])=>{
            if(value.trim()==""&&flag==1){
                setPopmsg({...popmsg,msg:key,visible:"block"});
                flag=0;
            }
        });
      }
      async function doLogin(usert){
        const response=await fetch(
                //'http://127.0.0.1:8000/react/login?format=json',{
                  'https://vikas4488.pythonanywhere.com/react/login?format=json',{
                    mode: 'no-cors',
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(usert),
                }
            );
            console.log('response:',response.status);
            const re=await response.json();
            if(response.status==200){
            setStatus("loggedIn");
            setUser(re);
            }else if(response.status==206) 
            setStatus("passwordError");
            else if(response.status==204)  
            setStatus("userDoesNotExist");
            else if(response.status==400)  
            setStatus("BadRequest");
            else
            setStatus("unknownError"); 
            processLogin(re);
      }
      function processLogin(u){
        localStorage.setItem('loggedin',true);
        localStorage.setItem('color',u.fname);
        localStorage.setItem('color',u.lname);
        localStorage.setItem('color',u.color);
        history.push("/navigation");
      }
      const logout =(response)=>{
        console.log("Google logout "+JSON.stringify(response))
      }
      const responseGoogle = (response) => {
         var profile = response.getBasicProfile();
         var userImg=profile.getImageUrl();
         doLogin({userId:profile.getId(),password:"gpass",email:profile.getEmail(),name:profile.getName()});
      }
    return(
        <div>
            <Pop msg={popmsg.msg} visible={popmsg.visible}></Pop>
            <div className="super-block">
           <div className="big-block" >
			<span onClick={switchReg} id="showlogin" className="label-big-block login-label-clr" style={{...anime,width:logwidth,position:"absolute",left:logleft}}>
						<Lan text="login_button"/>
					</span>
					<span onClick={switchLog} id="showreg" className="label-big-block reg-label-clr" style={{...anime,width:regwidth,position:"absolute",left:regleft}}>
						<Lan text="register_button"/>
					</span>
				<form id="loginsec" style={{...anime,marginTop: "75px",display:logdisplay}}  action="" method="post">					
					<div className="ipwrap" >
						<input className="ip login-border" type="text" onChange={e => setuserp({...userp,userId:e.target.value})} name="userid" placeholder=" " pattern="[0-9]{10}" maxLength="10"/>
						<span className="iplabel"><Lan text="phone_number" /></span>
					</div>
					<div className="ipwrap" >
						<input className="ip login-border" type="password" onChange={e => setuserp({...userp,password:e.target.value})} name="password" placeholder=" "pattern="[a-zA-Z0-9]{4,10}" />
						<span className="iplabel"><Lan text="password_label"/></span>
					</div>
						<div onClick={e => doLogin(userp)} id="loginbutton" className="log-reg btn-cnf">
							<Lan text="login_button"/>
						</div>
<div className="google-or">or</div>

    <GoogleLogin
    clientId="232621114578-iihtvv9gmfrhdn3b3usimcd0sdnq7l5o.apps.googleusercontent.com"
    //buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    className="googleLogin"
    cookiePolicy={'single_host_origin'}
  />
  {/* <GoogleLogout
      clientId="232621114578-iihtvv9gmfrhdn3b3usimcd0sdnq7l5o.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    ></GoogleLogout> */}

				</form>
				<form  id="regformpop" action="" method="post" style={{...anime,marginTop: "75px",display:regdisplay}}>
					<div className="ipwrap " >
						<input className="ip reg-border" type="text" name="fname" onChange={e => setRegData({...regData,fname:e.target.value})} pattern=".*\S+.*" placeholder=" " />
						<span className="iplabel"><Lan text="first_name"/></span>
					</div>

					<div className="ipwrap" >
						<input className="ip reg-border" type="text" pattern=".*\S+.*" onChange={e => setRegData({...regData,lname:e.target.value})} name="lname" placeholder=" " />
						<span className="iplabel"><Lan text="last_name"/></span>
					</div>

					<div className="ipwrap"  >
					    <Lan text="gender_label"/>
					<input type="radio" name="gender" id="female" onChange={e => setRegData({...regData,gender:e.target.value})} value="female" checked="checked" />
					<label htmlFor="female" style={{display: "inline-block"}}><Lan text="female_label"/></label>
                    <input type="radio" name="gender" id="male" onChange={e => setRegData({...regData,gender:e.target.value})} value="male"/>
                    <label htmlFor="male" style={{display: "inline-block"}}><Lan text="male_label"/></label>
                    </div>
					<div className="ipwrap" >
						<input className="ip reg-border" type="text" name="pnumber" onChange={e => setRegData({...regData,pnumber:e.target.value})} placeholder=" " pattern="[0-9]{10}" maxLength="10"/>
						<span className="iplabel"><Lan text="phone_number"/></span>
					</div>
					<div className="ipwrap" >
						<input className="ip reg-border" type="text" pattern=".*\S+.*" onChange={e => setRegData({...regData,place:e.target.value})} name="place" placeholder=" " />
						<span className="iplabel"><Lan text="place_label"/></span>
					</div>
					<div className="ipwrap"  >
					    <Lan text="use_as"/>
					<input type="radio" name="ui_type" id="work" onChange={e => setRegData({...regData,work:e.target.value})} value="work" checked="checked" />
					<label htmlFor="work" style={{display: "inline-block"}}><Lan text="work_record"/></label>
                    <input type="radio" name="ui_type" id="diary" onChange={e => setRegData({...regData,work:e.target.value})} value="diary" />
                    <label htmlFor="diary" style={{display: "inline-block"}}><Lan text="dairy_maintain"/></label>
                    </div>
					<div className="ipwrap" >
						<input className="ip reg-border" type="password" name="password" onChange={e => setRegData({...regData,pass1:e.target.value})} placeholder=" " pattern="[a-zA-Z0-9]{4,10}"  />
						<span className="iplabel"><Lan text="new_password"/></span>
					</div>
					<div className="ipwrap" >
						<input className="ip reg-border" type="password"  placeholder=" " onChange={e => setRegData({...regData,pass2:e.target.value})} pattern="[a-zA-Z0-9]{4,10}" />
						<span className="iplabel"><Lan text="re_password"/></span>
					</div>
						<div id="regbutton" onClick={doRegister} className="log-reg btn-pro">
							<Lan text="register_button"/>
						</div>


				</form>
			</div>
		</div>
   
        </div>
    )
}

export default Index;