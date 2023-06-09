import React, { useState } from 'react'
import './TableAdmin.css'
import { Link,useNavigate } from 'react-router-dom';
import './BookT.css'
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
    const [layout,setLayout]=useState(false);
    const[text,setText]=useState("Show Details")
    const[text2,setText2]=useState("Show Layout")
    function Submit()
    {
        console.log(show1)
        setShow1(!show1);
        if(show1)
        {
            console.log(show1);
            setText("Show Details")
        }
        else{
            console.log(show1);
            setText("Hide Details")
        }
        // nv1('/bt2')
    }
    function Layout()
    {
        // console.log(show1)
        setLayout(!layout);
        if(layout)
        {
            // console.log(show1);
            setText2("Show Layout")
        }
        else{
            // console.log(show1);
            setText2("Hide Layout")
        }
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
    <Link to='/bt2' state={{data:tnew}}><input type='button' className='BookTable' value='BookTable' onClick={Submit} /></Link> 
 
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
        <button className='save' onClick={Submit}>{text}</button>
        <button className='layout' onClick={Layout}>{text2}</button>
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
        <div>
        {
            layout &&
        <div className="mainCon">
        {tnew.map((val) => {
  const occupancy = val.Occupancy;
  const boxes = [];
  for (let i = 0; i < occupancy; i++) {
    boxes.push(
      <div
        key={i}
        style={{
          backgroundColor: "green",
          width: "50px",
          height: "50px",
          margin: "5px",
        }}
      ></div>
    );
  }
  if (occupancy % 2 === 0) {
    const halfNumber = occupancy / 2;
    const firstRow = boxes.slice(0, halfNumber);
    const secondRow = boxes.slice(halfNumber, occupancy);

    return (
      <div className="MainDiv" key={val.name}>
        <table>
          <tbody>
            <tr>
              {firstRow.map((box, index) => (
                <td key={index}><button>{box}</button></td>
              ))}
            </tr>
            <tr>
              {secondRow.map((box, index) => (
                <td key={index}><button>{box}</button></td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  if (occupancy % 2 === 1) {
    const halfNumber = Math.floor(occupancy / 2);
    console.log(halfNumber)
    const firstRowBoxes = boxes.slice(0, halfNumber);
    const secondRowBox = boxes[halfNumber];
    const thirdRowBoxes = boxes.slice(halfNumber + 1, occupancy);

    return (
      <div className="MainDiv" key={val.name}>
        <table>
          <tbody>
            <tr>
                {firstRowBoxes.map((box, index) => (
              <td key={index} rowSpan={2}>
                
                <button>   {box}</button> 
                  
              </td>
                ))}
              <td ><div></div></td>
            </tr>
            <tr>
              <td rowSpan="2"><button>{secondRowBox}</button></td>
            </tr>
            <tr>
              {thirdRowBoxes.map((box, index) => (
                <td key={index}><button>{box}</button></td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  } 
})}
</div>
}
        </div>
    </div>
  )
}

export default TableAdmin;