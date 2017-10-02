import React from "react";

export default function Item(props){
    return (
        <div>
        <h3>
          {props.title}: 
          <span style={{backgroundColor: props.color}} className="item-color"></span>
          <span onClick={() => props.removeItem(props.index)}style={{cursor: "pointer"}}>   (remove)</span>
        </h3>
      </div>
    )
}