import React from 'react'
const Listdata = ({Msgdata}) => {
    //this function used for changing time into time ago
    function timeAgo(time) {
        let date=new Date(time);//it change the string into time or date object
        var seconds = Math.floor((new Date() - date) / 1000);
    
        var interval = seconds / 31536000;
    
        if (interval > 1) {
        return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
        return Math.floor(interval) + " months"; 
        }
        interval = seconds / 86400;
        if (interval > 1) {
        return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
        return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
        return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }
  var aDay = 24*60*60*1000;
  console.log(timeAgo(new Date(Date.now()-aDay)));
  console.log(timeAgo(new Date(Date.now()-aDay*2)));
 
    return (
        <>
            { 
            Msgdata.map((currElement)=>{//here mapping is used to fetch the element from array of object 
                return(
                    <div key={currElement._id}> 
                    {   /*here i used ternary operator.
                            it will check wether the sender is agent or user if 
                            it is agent then it send data to the left side of the window and 
                            if it is user then it will send data to the right side of the window*/ 
                        (currElement.sender==="agent") ?
                        //here the agent data stored into leftdata class
                        <div className="leftdata"> 
                            <p id="agenttag" >{`${currElement.sender}`}</p>  
                            <p id="messagetag">{`${currElement.message}`}</p>
                            <p id="timetag">{`Send ${timeAgo(currElement.createdAt)} ago`}</p>
                        </div> 
                        :
                        //here the user data stored into rightdata class
                        <div className="rightdata">
                            <p id="usertag" >{`${currElement.sender}`}</p>  
                            <p id="messagetag">{`${currElement.message}`}</p>
                            <p id="timetag">{`Send ${timeAgo(currElement.createdAt)} ago`}</p>
                        </div> 
                    }
                          
                    </div>
                )
            })}
        </>
    )
}

export default Listdata
