import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function WaitingList() {
    const [name,setName]=useState('');
    const nv1=useNavigate();
    const [mobileNo,setMobileNO]=useState('');
    const [person,setPerson]=useState(0);
    // const [kids,setKids]=useState(0);
    const [showlist,setShowlist]=useState(true);
    const [waitingData,setWaitingData]=useState([]);
 const[book,setBook]=useState('No');
    const [srno,setSrno]=useState(1);
    const [waiting,setWaiting]=useState([]);
    const [show,setShow]=useState(false);
    useEffect(()=>{
        if(book==='No')
        // console.log('in if ')
         setShow(true);
    
    },[])
    function TableBookOrNot(e)
    {
        // console.log(val)
        setBook(e.target.value);
        console.log(book);
        // if(book==='No')
        // // console.log('in if ')
        //  setShow(true);
    }
     function Proceed(srno)
    {
        if(book==='No')
        // console.log('in if ')
         setShow(true);
        console.log(srno);
        const waitingPerson=waitingData.filter((val)=>{
            if(val.srno===srno)
             return true;
        })
        // console.log(waitingPerson);
        // setWaiting(waitingPerson);
        // if(waiting.srno==srno)
        nv1('/BookTableAdmin', { state: {waitingPerson} })

    }

    function AddToList()
    {
        setSrno(srno+1)
        // console.log(name);
        setWaitingData([...waitingData,{
            srno:srno,
            name:name,
            mobileNo:mobileNo,
           person:person       
         }])
          setShowlist(true)
          setName('');
          setMobileNO('')
          setPerson(0);
        //   setKids('')
    }
  return (
    <div>
        <h1>Enter WaitingList::</h1>
        <div>
           <table class='text-center table-auto w-2/3 '>
            <thead>
                <tr class='border-2'>
                    <th class='border-2 text-center'>Name</th>
                    <th class='border-2 text-center'>MobileNo</th>
                    <th class='border-2 text-center'>No_Of_Person</th>
                </tr>
              
            </thead>
            <tbody>
                <tr class='border-2 '>
                    <td class='border-2 text-center'><input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/></td>
                    <td class='border-2 text-center'><input type='text' value={mobileNo} onChange={(e)=>{setMobileNO(e.target.value)}}/></td>
                    <td class='border-2 text-center'><input type='number' value={person} onChange={(e)=>{setPerson(e.target.value)}}/></td>
                    
                   
                </tr>
            </tbody>
           </table>
           <button  onClick={AddToList} class='text-white font-bold mt-6 mb-6 bg-neutral-400 px-2 py-2' >Add to List</button>
           { showlist &&
           <div>
            
                <table class='table-auto w-3/4'>
            <thead>
                <tr class='border-2'>
                    <th>Sr_No</th>
                    <th  class='border-2 text-center' >Name</th>
                    <th class='border-2 text-center' >MobileNo</th>
                    <th  class='border-2 text-center'>No_Of_Person</th>
                    <th class='border-2 text-center'>Table Booked Or Not</th>
                    <th class='border-2 text-center'>OrderLink</th>
                    <th></th>
                </tr>
               
            </thead>
            {
                waitingData.map((val)=>{
                    return(
                        <tbody>
                            <tr class='border-2'>
                            <td>{val.srno}</td>
                                <td class='border-2 text-center'>{val.name}</td>
                                <td class='border-2 text-center'>{val.mobileNo}</td>
                                <td class='border-2 text-center'>{val.person}</td>
                                <td class='border-2 text-center'>
                                <select value={book} onChange={TableBookOrNot}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select></td>
                                <td class='border-2 text-center'>Link</td>
                                <td><button disabled={book=='No'} class='text-white font-bold  bg-neutral-400 px-1 py-1' onClick={()=>Proceed(val.srno)}>Proceed</button></td>
                               
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