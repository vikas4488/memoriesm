import React,{ useState } from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lan from "../pages/language";
import Pop from "../pages/popup";

export function colorProcess() {
    var colorstr=localStorage.getItem('color');
    if(colorstr==null)
    colorstr="bg_clr:#ffffff#444444:nav_clr:#87ceeb#444444:card_clr:#ffffff#444444:label_clr:#ddd1ff#444444:popup_clr:#ffb3ff#444444:btn_cnf:#008000#ffffff:btn_pro:#4169e1#fbfbfb:btn_upd:#ffa500#ffffff:btn_rej:#ff0000#ffffff:ip_clr:#ffffff#444444:";
    var colorarray = colorstr.split(':');
    var color={};
    var i=0;
    var classname
    colorarray.map(function (clr){
        if(i%2==0)
        {
            classname=clr.replace('_','');
        }else{
            var clr1=clr.substring(0,7);
            var clr2=clr.substring(7,14);
            color[classname]={backgroundColor:clr1,color:clr2}
        }
        i++;
    });
    return color;
}
function Themep(){
    const color=colorProcess();
    return (
        color
    );
}

export default Themep;