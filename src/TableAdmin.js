import React, { useState } from 'react'
import './TableAdmin.css'
import { Link,useNavigate } from 'react-router-dom';
// import AllDataRes from './AllDataRes';


function TableAdmin() {
    // const nv1=useNavigate();
    const TableData=[{
        id:'1',
        name:'T1',
        Occupancy:'',
        mergable:'',
        select:true,
        reserved:false
    },{
        id:'2',
        name:'T2',
        Occupancy:'',
        mergable:'',
        select:true,
        reserved:false
    },{
        id:'3',
        name:'T3',
        Occupancy:'',
        select:true,
        reserved:false,
        mergable:''
    },
    {
        id:'4',
        name:'T4',
        select:true,
        Occupancy:'',
        reserved:false,
        mergable:''
    },
    {
        id:'5',
        name:'T5',
        select:true,
        reserved:false,
        Occupancy:'',
        mergable:''
    },
    {
        id:'6',
        name:'T6',
        Occupancy:'',
        select:true,
        reserved:false,
        mergable:''
    },
    {
        id:'7',
        name:'T7',
        Occupancy:'',
        select:true,
        reserved:false,
        mergable:''
    },
    {
        id:'8',
        name:'T8',
        Occupancy:'',
        select:true,
        reserved:false,
        mergable:''
    },
    {
        id:'9',
        name:'T9',
        Occupancy:'',
        select:true,
        reserved:false,
        mergable:''
    },
    {
        id:'10',
        name:'T10',
        select:true,
        Occupancy:'',
        reserved:false,
        mergable:''
    },
    {
        id:'11',
        name:'T11',
        select:true,
        Occupancy:'',
        reserved:false,
        mergable:''
    },
    {
        id:'12',
        name:'T12',
        select:true,
        Occupancy:'',
        reserved:false,
        mergable:''
    },
    {
        id:'13',
        name:'T13',
        select:true,
        Occupancy:'',
        reserved:false,
        mergable:''
    },
    {
        id:'14',
        name:'T14',
        select:true,
        Occupancy:'',
        reserved:false,
        mergable:''
    },
    {
        id:'15',
        name:'T15',
        select:true,
        Occupancy:'',
        reserved:false,
        mergable:''
    },
    {
        id:'16',
        name:'T16',
        select:true,
        Occupancy:'',
        reserved:false,
        mergable:''
    },
    {
        id:'17',
        name:'T17',
        Occupancy:'',
        select:true,
        reserved:false,
        mergable:''
    },
    {
        id:'18',
        name:'T18',
        reserved:false,
        select:true,
        Occupancy:'',
        mergable:''
    },
    {
        id:'19',
        name:'T19',
        select:true,
        reserved:false,
        Occupancy:'',
        mergable:''
    },
    {
        id:'20',
        name:'T20',
        select:true,
        Occupancy:'',
        reserved:false,
        mergable:''
    },
    {
        id:'21',
        name:'T21',
        select:true,
        Occupancy:'',
        reserved:false,
        mergable:''
    },
    {
        id:'22',
        name:'T22',
        select:true,
        reserved:false,
        Occupancy:'',
        mergable:''
    },
    {
        id:'23',
        select:true,
        name:'T23',
        reserved:false,
        Occupancy:'',
        mergable:''
    },
]
    const [tdata,setTdata]=useState(TableData);
    const [tnew,setTnew]=useState(TableData);
    const [num,setNum]=useState(0);
    const [show,setShow]=useState(false);
    const [show1,setShow1]=useState(false);
    function Submit()
    {
        setShow1(true);
        // nv1('/bt2')
    }
    function AddTables()
    {
       var tnum=num;
       console.log(tnum)
       var Tnew= tdata.filter((val)=>{
           return Number(val.id)<=tnum;
       })
       setShow(true);
       setTnew(Tnew);
    //    console.log(Tnew);
    }
    function AddMergable(merge,name){
      
        setTnew((prevItems) =>
        prevItems.map((item) => {
          if (item.name === name) {
            return {
              ...item,
              mergable: merge,
              // price:Number(item.price*(Number(item.q)+1))
            };
          }
          return item;
        })
        );
        // console.log(tnew);
    }
    function AddOccupancy(occupancy,name){
        setTnew((prevItems) =>
        prevItems.map((item) => {
          if (item.name === name) {
            return {
              ...item,
             Occupancy:occupancy,
              // price:Number(item.price*(Number(item.q)+1))
            };
          }
          return item;
        }))
        console.log(tnew);
    }
  return (
    <div className='main'>
    <div className='flex'>
    <p className='Addtable'><span>Enter The number of Tables::</span><input type='number' onChange={(e)=>setNum(e.target.value)}/><button onClick={AddTables}>Add</button></p>
    <div>
    <Link to='/BookTableAdmin' state={{data:tnew}}><input type='button' className='BookTable' value='BookTable' onClick={Submit} /></Link> 
 
    </div>
    </div>
    
    {
        show && 
        <>
        <table className='table'>
             <thead>
                <tr>
                    <td>Table ID</td>
                    <td>Number of Occupancy</td>
                    <td>Mergable(yes/no)</td>
                </tr>
             </thead>
            <tbody>
             { tnew.map((val)=>{
                   return(
                    <tr>
                    <td>{val.name}</td>
                    <td><input type='number' value={val.Occupancy} onChange={(e)=>AddOccupancy(e.target.value,val.name)} placeholder='Enter Occupancy'/></td>
                    <td><select className='select' onChange={(e)=>AddMergable(e.target.value,val.name)} >
                        <option>--Select Mergable or Not--</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                    </select></td>
                    </tr>

                   )
              })
             }
            </tbody>
        </table>
        <button className='save' onClick={Submit}>Show</button>
 <Link to='/bt2' state={{data:tnew}}><input type='button' className='save' value='Save'/></Link> 
 </>
    }
        
        <div>
        {
            show1 && <div>
                    <table className='table'>
                    <thead>
                <tr>
                    <td>Table ID</td>
                    <td>Number of Occupancy</td>
                    <td>Mergable(yes/no)</td>
                </tr>
             </thead>
            {
                tnew.map((val)=>{
                    return(
                        <tbody>
                    <tr>
                    <td>{val.name}</td>
                    <td>{val.Occupancy} </td>
                    <td>{val.mergable} </td>
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

export default TableAdmin
