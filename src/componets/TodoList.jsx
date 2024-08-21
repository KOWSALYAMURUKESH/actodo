
import TodoItem from "./TodoItem"

function TodoList(props){
    
   
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
    
    
    
    return(
<div className="bg-[#BDB0E8] border-rounded-md p-2  flex-grow ">
                <h1 className="text-2xl font-medium my-2">Today's Activity</h1>
                {
                    activityArr.map(function(item,index){
                      return  (<TodoItem  id={item.id}item={item} index={index} activityArr={activityArr} setActivityArr={setActivityArr}></TodoItem>)
                    })
                }
            </div>
    )
}
export default TodoList