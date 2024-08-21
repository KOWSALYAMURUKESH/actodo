import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import { useState } from "react"

function ToDo() {

    const [activityArr,setActivityArr] = useState([
        {
            id:1,
            activity:"Go to bed early"
        },
        {
            id:2,  
            activity:"Wake up early"
        },
        {
            id:3,
            activity:"Take meditation"
        }
    ])
    


    return (
        <div>
            {/*todo form*/}
            <div className="flex gap-5 flex-wrap"> 
         <TodoForm activityArr={activityArr} setActivityArr={setActivityArr}></TodoForm>
            

            {/*to do list*/}
            <TodoList activityArr={activityArr} setActivityArr={setActivityArr}></TodoList>
            </div>
        </div>
    )
}
export default ToDo