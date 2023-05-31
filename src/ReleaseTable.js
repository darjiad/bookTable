import React from 'react'
import { useState } from 'react';
import { useLocation,Link } from 'react-router-dom'

function ReleaseTable() {
    const loc=useLocation();
    const data1=loc.state.data;
    const [data,setData]=useState(data1)
    function ReleaseTable(name)
    {
      
        setData((prevItems) =>
        prevItems.map((item) => {
          if (item.name === name && item.reserved==true) {
            //   setIsActive(true);
                
              return {
                ...item,
                reserved:false,
                // price:Number(item.price*(Number(item.q)+1))
              };
            }
            
            return item;
          })
        );
        console.log(data)
    }
  return (
    <div>
     <div className='twobutton'>
       <Link to='/BookTableAdmin' state={{data:data}}> <button className='button'>BookTable</button></Link>
       <Link to='/RealeseTable' state={{data:data}}> <button className='button'>RealeseTable</button></Link>
      </div>
         <table className='table'>
             <thead>
                <tr>
                    <td>Table ID</td>
                
                    <td>RealeseTable</td>
                </tr>
             </thead>
            <tbody>
             { 
              data.map((val)=>{
                   return(
                    <tr>
                    <td>{val.name}</td>
                    <td><button className='button1' onClick={()=>ReleaseTable(val.name)}> {val.reserved ? 'Release Table' : 'Available'}</button></td>
                    </tr>

                   )
              })
             }
            </tbody>
        </table>
    </div>
  )
}

export default ReleaseTable

