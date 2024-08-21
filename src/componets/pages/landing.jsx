import Card from "../card";
import Header from "../header";
import ToDo from "../ToDoContainer";
import { useLocation } from "react-router-dom";



function Landing() {

    const data = useLocation()
    console.log(data.state.user)
    return (
      <div className="bg-black p-14">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
    {/*header*/}
          <Header username={data.state.user}></Header>
  {/*Card*/}
          <div className="flex justify-between gap-7 my-5 flex-wrap">
            <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}  ></Card>
            <Card bgcolor={"#FC6662"} title={"August"} subtitle={"1:56"} ></Card>
            <Card bgcolor={"#FEA203"} title={"Built Using"} subtitle={"React"}  ></Card>
          </div>
          {/*ToDoContainer*/}
          <div>
            <ToDo></ToDo>
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default Landing
  
