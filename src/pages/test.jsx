import React,{ useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lan from "../pages/language";
import Pop from "../pages/popup";
import Themep,{colorProcess} from "../pages/themeprocess";
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
const t=11;
function Test(){
    const [items,setItems]=useState(['hello', 'world', 'click', 'me']);
    function handleAdd() {
                const newItems = items.concat([
                  prompt('Enter some text')
                ]);
                setItems(newItems);
              }
            
              function  handleRemove(i) {
                let newItems = items.slice();
                newItems.splice(i, 1);
                setItems(newItems);
              }
            const itemr = items.map((item, i) => (
                <div key={item} onClick={() => handleRemove(i)}>
                  {item}
                </div>
              ));
        return(
            <div>
                <button onClick={handleAdd}>Add Item</button>
                <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}>
        
                  {itemr}
                </ReactCSSTransitionGroup>
              </div>
        );
}
export default Test;



// function West(){
//     const [items,setItems]=useState({'hello', 'world', 'click', 'me'});
//     function handleAdd() {
//         const newItems = items.concat([
//           prompt('Enter some text')
//         ]);
//         setItems({items: newItems});
//       }
    
//       function  handleRemove(i) {
//         let newItems = items.slice();
//         newItems.splice(i, 1);
//         setItems({items: newItems});
//       }
//     const items = items.map((item, i) => (
//         <div key={item} onClick={() => handleRemove(i)}>
//           {item}
//         </div>
//       ));
// return(
//     <div>
//         <button onClick={handleAdd}>Add Item</button>
//         <ReactCSSTransitionGroup
//           transitionName="example"
//           transitionEnterTimeout={500}
//           transitionLeaveTimeout={300}>

//           {items}
//         </ReactCSSTransitionGroup>
//       </div>
// );
// }


// export default Test;