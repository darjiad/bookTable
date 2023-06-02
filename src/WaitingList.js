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
    // useEffect(()=>{
    //     if(book==='No')
    //     // console.log('in if ')
    //      setShow(true);
    
    // },[])
    function TableBookOrNot(e, srno) {
        const updatedWaitingData = waitingData.map((val) => {
          if (val.srno === srno) {
            return {
              ...val,
              book: e.target.value
            };
          }
          return val;
        });
      
        setWaitingData(updatedWaitingData);
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
        // console.log(name);
        if(name!='' && mobileNo!='' && person>0 )
        {
        setSrno(srno+1)
        setWaitingData([...waitingData,{
            srno:srno,
            name:name,
            mobileNo:mobileNo,
           person:person, 
           book:'No'  
         }])
          setShowlist(true)
          setName('');
          setMobileNO('')
          setPerson(0);
        }
        //   setKids('')
    }
  return (
    <div>
        <h1 class='font-bold text-2xl text-red-700 mt-2 mb-3 text-center'>Enter WaitingList::</h1>
        <div>
           <table class='text-center table-auto w-2/3  mx-auto '>
            <thead>
                <tr class='border-2 border-red-700'>
                    <th class='border-2 text-xl border-red-700 text-center'>Name</th>
                    <th class='border-2 text-xl border-red-700 text-center'>MobileNo</th>
                    <th class='border-2 text-xl border-red-700 text-center'>No_Of_Person</th>
                </tr>
              
            </thead>
            <tbody>
                <tr class='border-2 '>
                    <td class='border-2 text-xl border-red-700 text-center'><input class='w-full text-center' type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/></td>
                    <td class='border-2 text-xl border-red-700 text-center'><input class='w-full text-center' type='number' value={mobileNo} onChange={(e)=>{setMobileNO(e.target.value)}}/></td>
                    <td class='border-2 text-xl border-red-700 text-center'><input class='w-full text-center' type='number' value={person} onChange={(e)=>{setPerson(e.target.value)}}/></td>
                    
                   
                </tr>
            </tbody>
           </table>
           <div class='flex justify-center '>
           <button  onClick={AddToList} class='text-white font-bold mt-6 mb-6 bg-red-700 px-2 py-2 rounded-md ' >Add to List</button>
           </div>
           { showlist &&
           <div>
            
                <table class='table-auto w-3/4 mx-auto'>
            <thead>
                <tr class='border-2'>
                    <th class='border-red-700 text-xl border-2 text-center'>Sr_No</th>
                    <th  class='border-2 text-xl border-red-700 text-center' >Name</th>
                    <th class='border-2 text-xl border-red-700 text-center' >MobileNo</th>
                    <th  class='border-2 text-xl border-red-700 text-center'>No_Of_Person</th>
                    <th class='border-2 text-xl border-red-700 text-center'>Table Booked Or Not</th>
                    <th class='border-2 text-xl border-red-700 text-center'>OrderLink</th>
                    <th class='border-red-700 text-xl border-2 text-center'></th>
                </tr>
               
            </thead>
            {
                waitingData.map((val)=>{
                    return(
                        <tbody>
                            <tr class='border-2'>
                            <td class='border-red-700 text-xl border-2 text-center'>{val.srno}</td>
                         <td class='border-2 text-xl border-red-700 text-center'>{val.name}</td>
                                <td class='border-2 text-xl border-red-700 text-center'>{val.mobileNo}</td>
                                <td class='border-2 text-xl border-red-700 text-center'>{val.person}</td>
                                <td class='text-xl border-2 border-red-700 text-center'>
                                <select value={val.book} onChange={(e)=>TableBookOrNot(e,val.srno)}>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select></td>
                                <td class='border-2 border-red-700 text-center text-xl'>Link</td>
                                <td class='border-red-700 border-2 text-center'><button  disabled={val.book=='No'} class={`${val.book=='No' ?'bg-red-700 text-white px-1 py-1 text-center opacity-10 mt-1 mb-1 rounded-md font-bold':'text-white font-bold  bg-red-700 px-1 py-1 mt-1 mb-1 rounded-md font-bold'}`} onClick={()=>Proceed(val.srno)}>Proceed</button></td>
                               
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