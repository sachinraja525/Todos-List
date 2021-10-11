import React from 'react'
import { Todoitem } from "./Todoitem";


export const Todos = (props) => {
    return (
        <div className="container my-3 mb-5" >
            <h3 className="text-center my-3"> Todos List</h3>
            {props.todos.length === 0 ? "No Todod To Display" :

                props.todos.map((todo) => {
                    return (
                        <>
                            <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />  <hr />
                        </>
                    )
                })

            }
        </div>
    )
}
