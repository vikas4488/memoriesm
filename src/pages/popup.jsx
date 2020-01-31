import React from 'react';
import Lan from "../pages/language";
function Pop(props){


    return(
        <div className="popwrap" style={{display:props.visible}}>
            <div className="popmsg " >
                <div>{props.msg}</div>
                <div className="closeconfirm " > 
                <Lan text="confirm_label"/>
                </div>
            </div>
        </div>
        
    );
}
export default Pop;