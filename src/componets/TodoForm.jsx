import { useState } from "react"

function TodoForm(props) {
     const activityArr = props.activityArr
     const setActivityArr = props.setActivityArr

const [newActivity,setNewActivity] = useState("")

function handlechange(eve){
      setNewActivity(eve.target.value)
}
function handleAdd(){
    setActivityArr([...activityArr, {id:activityArr.length+1,activity:newActivity}])
    setNewActivity("")
}



    return (
        
            <div className="flex flex-col">
                <div >

                    <h1 className="text-2xl font-medium">Manage Activiies</h1>

                    <div>
                        <input value={newActivity} onChange={handlechange}  type="text" className="border border-black my-3 p-2" placeholder="Next Activity?" ></input>
                        <button onClick={handleAdd} className=" bg-black text-white   border border-black    p-2">Add</button>
                    </div>
                </div>

            </div>
        
            )
}
            export default TodoForm