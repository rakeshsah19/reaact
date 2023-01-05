import React  from "react";
import {TodoItems} from "./TodoItem"

export const TodoItems = () =>{
    return (
        <div className="Container">
            <h3>Todos List</h3>
            {/* {props.todos}*/}
            <Todos todo ={props.todo[0]}/>
            <button className="btn btn-sm btn-danger">Delete</button>
        </div>
    )
}