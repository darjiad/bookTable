import React from 'react'
import { useState } from 'react'

function WaitingList() {
    const [name,setName]=useState('');
    const [mobileNo,setMobileNO]=useState('');
    const [elders,setElders]=useState(0);
    const [kids,setKids]=useState(0);
    const [showlist,setShowlist]=useState(false);
    const [waitingData,setWaitingData]=useState([]);

    function AddToList()
    {
        console.log(name);
        setWaitingData([...waitingData,{
            name:name,
            mobileNo:mobileNo,
            elders:elders,
            kids:kids
        }])
          setShowlist(true)
          setName('');
          setMobileNO('')
          setElders('');
          setKids('')
    }
  return (
    <div>
        <h1>Enter WaitingList::</h1>
        <div>
           <table>
            <thead>
                <tr>
                    <th rowSpan="2">Name</th>
                    <th rowSpan="2">MobileNo</th>
                    <th colSpan="2">No_Of_Person</th>
                </tr>
                <tr>
                    <th>No_of_Elders</th>
                    <th>No_of_Kids</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/></td>
                    <td><input type='number' value={mobileNo} onChange={(e)=>{setMobileNO(e.target.value)}}/></td>
                    <td><input type='number' value={elders} onChange={(e)=>{setElders(e.target.value)}}/></td>
                    <td><input type='number' value={kids} onChange={(e)=>{setKids(e.target.value)}}/></td>
                   
                </tr>
            </tbody>
           </table>
           <button onClick={AddToList}>Add to List</button>
           { showlist &&
           <div>
            
                <table>
            <thead>
                <tr>
                    <th rowSpan="2">Name</th>
                    <th rowSpan="2">MobileNo</th>
                    <th colSpan="2">No_Of_Person</th>
                </tr>
                <tr>
                    <th>No_of_Elders</th>
                    <th>No_of_Kids</th>
                </tr>
            </thead>
            {
                waitingData.map((val)=>{
                    return(
                        <tbody>
                            <tr>
                                <td>{val.name}</td>
                                <td>{val.mobileNo}</td>
                                <td>{val.elders}</td>
                                <td>{val.kids}</td>
                            </tr>
                            </tbody>
                    )
                })
            }
                        </table>
           </div>
           }
        </div>
           
    </div>
  )
}

export default WaitingList