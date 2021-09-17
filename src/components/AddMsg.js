import React,{ useState } from 'react'


const AddMsg = (addmsg) => {
    
    const [msgInput,setMsgInput]=useState("");
    const submit = ()=>{

        if(!msgInput)//it check the input is vacant or not before clicking the send button
        {
            alert("Please type your message");//if it is vacant it shows alert in window
        }
        else{
            const msgtime=new Date(); //it is used for fetching the time or date
            addmsg.addMsg(msgInput,msgtime);//it will addMsg() which is declared in Datalist.js file
            setMsgInput("")//is is used to make input vacant after clicking the send button
        }
    }
    return (
        <>  
            <div className="input_container"> 
                <input type="text" className="input_form" value={msgInput} onChange={(event)=>{setMsgInput(event.target.value)}} placeholder="Enter your message here"/>
                <button type="submit" onClick={submit}>Send</button>
            </div>

        </>
        
    )
}
export default AddMsg