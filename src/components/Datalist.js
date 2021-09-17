/*here all modules is imported into Datalist then data list gonna imported into app.js
 so i can say that dataList is my main components it call all the modules
*/
import React, {useState} from 'react'
import MsgData from './MsgData.js'
import Listdata from './Listdata.js'
import AddMsg from './AddMsg'
import './Datalist.css' 


const Datalist = () => {
    /*here i declared a function addMsg() which stored data into existing data MsgData
    and it will two arguements msg and time which is passed by file AddMsg.js
    */  
    const addMsg=(msg,msgtime)=>{
    const newmsg={
        message:msg,
        createdAt:msgtime,
        sender:"user",
        _id:Msgdata[Msgdata.length-1]._id+1
        }
        setMsgdata([...Msgdata,newmsg]);//it is used for inserting values into existing array at last position
    }
    const [Msgdata,setMsgdata] = useState(MsgData) 
    console.log(Msgdata);
    return (
        <>  
            <div className="container">
                {/* here is used main_container to onveert the data into two screens
                first for messages and second for input message */}
                <div className="main_container">
                    <div className="addmsg_container">
                        {/* here the addMsg is passed to AddMasg module  */}
                        <AddMsg addMsg={addMsg}/>
                    </div>
                    <div className="message_conatiner">
                        {/* here Msgdata is passed into Listdata module */}
                        <Listdata Msgdata={Msgdata} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Datalist
