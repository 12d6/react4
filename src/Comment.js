import React from "react";
import faker from 'faker';
function Comment(props){
    return(
        <div className="ui cards">
        <div className="card">
        <div className="content">
       < img className="right floated mini ui image" src='https://semantic-ui.com/images/avatar/small/jenny.jpg'/>
          <div className="header">
            {props.name}
          </div>
          <div className="meta">
            New Member
          </div>
          <div className="description">
            Jenny wants to add you to the group <b>best friends</b>
          </div>
        </div>
        
      </div>
      </div>
    
      
    

    )
};
export default Comment;