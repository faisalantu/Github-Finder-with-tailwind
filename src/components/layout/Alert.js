import React from "react";

const Alert = (props) => {
  
    if(props.alert !== null){
      return(
          <div className={`alert alert-${props.alert.type}`}>
              <i className='fas fa-info-circle'> {props.alert.msg}</i>
          </div>
      )
    }
    else{
        return(
            <div></div>
        )
    }
  
};

export default Alert;
