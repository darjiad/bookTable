// import React from 'react'
// import { useLocation } from 'react-router-dom'

// function Confirm() {
//     const loc=useLocation();
//   const data=loc.state.data;
//   return (
//     console.log(data)
//   )
// }

// export default Confirm
import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./BookT.css";


function Confirm() {
  const loc = useLocation();
//   const nv1=useNavigate();
  const data1 = loc.state.data;
  const [data3,setData3]=useState(data1)
  const [div, setDiv] = useState();
  const [person2, setPerson2] = useState(false);
  const [person4, setPerson4] = useState(false);
  const [person6, setPerson6] = useState(false);
  const [person8, setPerson8] = useState(false);
  const [person10, setPerson10] = useState(false);
  const [occupancy,setOccupancy]=useState(0)
  const [elder, setElder] = useState("");
  const [kids, setKids] = useState("");
  const [totalperson, setTotalperson] = useState(0);
  const [showLayout, setShowLayout] = useState(false);
  const [isActive,setIsActive]=useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [sTable, setSTable] = useState("");
  const [color,setColor]=useState("#cb202d")
  const [date, setDate] = useState({
    date1: new Date().toISOString().slice(0, 10),
  });
  const [time, setTime] = useState("");
  const [mes, setMes] = useState(false);
  console.log(data1);
  useEffect(() => {
    if (totalperson === 0) {
      setPerson6(false);
      setPerson4(false);
      setPerson2(false);
      setPerson8(false);
      setPerson8(false);
      setMes(false);
    }
    if (totalperson <= 2 && totalperson >= 1) {
      setPerson6(true);
      setPerson4(true);
      setPerson2(false);
      setMes(false);
      setPerson8(true);
      setPerson10(true);
    }
    // setClick4(true);

    if (totalperson > 2 && totalperson <= 4) {
      setPerson2(true);
      setPerson6(true);
      setPerson4(false);
      setPerson8(true);
      setPerson10(true);
      setMes(false);
    }
    if (totalperson > 4 && totalperson <= 6) {
      setPerson4(true);
      setPerson2(true);
      setPerson6(false);
      setPerson8(true);
      setPerson10(true);
      setMes(false);
    }
    if (totalperson > 6 && totalperson <= 8) {
      setPerson2(true);
      setPerson4(true);
      setPerson6(true);
      setPerson8(false);
      setPerson10(true);
      // setShowLayout(false);
      // setShowtable(false);
      // setMes(true);
    }
    if (totalperson > 8 && totalperson <= 10) {
      setPerson2(true);
      setPerson4(true);
      setPerson6(true);
      setPerson8(true);
      setPerson10(false);
      // setShowLayout(false);
      // setShowtable(false);
      // setMes(true);
    }
    if (totalperson > 10) {
      setPerson2(true);
      setPerson4(true);
      setPerson6(true);
      setPerson8(true);
      setPerson10(true);
      // setShowLayout(false);
      // setShowtable(false);
      setMes(true);
      setSTable('')
    }
  }, [PersonC]);

  function PersonC() {
    setShowLayout(true);
    const k = Number(kids);
    const el = Number(elder);
    setTotalperson(k + el);
  }
  function DisableDate() {
    return new Date().toISOString().split("T")[0];
  }
  function SelectTable(id) {
    setSelectedButton(id)
    if (id === "T1") {
      setSTable(id);
    } else if (id === "T2") {
      setSTable(id);
    } else if (id === "T3") {
      setSTable(id);
    } else if (id === "T4") {
      setSTable(id);
    } else if (id === "T5") {
      setSTable(id);
    } else if (id === "T6") {
      setSTable(id);
    } else {
      setSTable("");
    }

    setData3((prevItems) =>
    prevItems.map((item) => {
      if (item.name === id) {
          setIsActive(true);

          return {
            ...item,
            reserved:true,
            // price:Number(item.price*(Number(item.q)+1))
          };
        }
        
        return item;
      })
    );
  }
  function ResevedT(sTable)
  {
    // setData((prevItems) =>
    //   prevItems.map((item) => {
    //     if (item.name === sTable) {

    //       return {
    //         ...item,
    //         reserved:true,
    //         // price:Number(item.price*(Number(item.q)+1))
    //       };
    //     }
        
    //     return item;
    //   })
    // );
    // nv1('/confirm',{state:data})
  }
  return (
    <div>
      <div className="bk2">
      <div className="nameandphn">
        <div className="Booking">
          <span>Enter Name:</span>
          <input type='text'/>
        </div>
        <div className="Booking">
          <span>Enter Phone No:</span>
          <input type='number'/>
        </div>
        </div>
        <div className="booktable">
        
          <div className="Booking">
            <span>Select Person:</span>
            <div className="person">
              <select onChange={(e) => setElder(e.target.value)} required>
                <option value="">--Select elders--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10-20">10</option>
                <option value="20-30">20</option>
              </select>
              <select onChange={(e) => setKids(e.target.value)} required>
                <option value="">--Select kids above 2 years--</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10-20">10</option>
                <option value="20-30">20</option>
              </select>
            </div>
          </div>
          <div className="Booking">
            {" "}
            <span>Select Date:</span>
            <input
              type="date"
              value={date.date1}
              required
              onChange={(e) => setDate({ date1: e.target.value })}
              min={DisableDate()}
            />
          </div>
          <div className="Booking">
            <span>Select Time:</span>
            <input type="time" onChange={(e) => setTime(e.target.value)} />
          </div>
          <div className="showbtn">
            <button onClick={PersonC} className="btne" type="submit">
              Select Table
            </button>
          </div>
        </div>

        <div>
          {showLayout && kids && elder && date && (
            <>
              <div className="mainCon">
                {
                    
                    data3.map((val) => {
                  const occupancy = val.Occupancy;
                  const boxes = [];
                  for (let i = 0; i < occupancy; i++) {
                    boxes.push(<div key={i} style={{
                      backgroundColor: selectedButton === val.name  && val.reserved ? "#cb202d" : "green",
                        width: '50px',
                        height: '50px',
                        margin: '5px',
            }}></div>);
                  }
                  if (occupancy == "2") {
                    return (
                      <div className="MainDiv2"  key={val.name}>
                        <button
                          disabled={person2  || val.reserved===true}
                          onClick={() => SelectTable(val.name)}
                        >
                          {boxes.map((box, index) => (
                            <div className="div" key={index}>
                              {box}
                            </div>
                          ))}
                        </button>
                      </div>
                    );
                  } else if (occupancy == "4") {
                    return (
                      <div className="MainDiv4">
                        <button
                          disabled={person4 || (val.reserved===true)}
                          onClick={() => SelectTable(val.name)}
                        >
                          {boxes.map((box, index) => (
                            <div className="div" key={index}>
                              {box}
                            </div>
                          ))}
                        </button>
                      </div>
                    );
                  } else if (occupancy == "6") {
                    return (
                      <div className="MainDiv6">
                        <button
                          disabled={person6 || (val.reserved===true) }
                          onClick={() => SelectTable(val.name)}
                        >
                          {boxes.map((box, index) => (
                            <div className="div" key={index}>
                              {box}
                            </div>
                          ))}
                        </button>
                      </div>
                    );
                  } else if (occupancy == "8") {
                    return (
                      <div className="MainDiv8">
                        <button
                          disabled={person8 || (val.reserved===true)}
                          onClick={() => SelectTable(val.name)}
                        >
                          {boxes.map((box, index) => (
                            <div className="div" key={index}>
                              {box}
                            </div>
                          ))}
                        </button>
                      </div>
                    );
                  }
                  else if (occupancy == "10" || (val.reserved===true)) {
                    return (
                      <div className="MainDiv10">
                        <button
                          disabled={person10}
                          onClick={() => SelectTable(val.name)}
                        >
                          {boxes.map((box, index) => (
                            <div className="div" key={index}>
                              {box}
                            </div>
                          ))}
                        </button>
                      </div>
                    );
                  }
                  
                })}
              </div>

              <div>
                {mes && 
                  /* <h1 className="mes3">
                    Total Persons are greter than 10 so Your Table will be
                    arranged by Restaurent Staff
                  </h1> */
                 <div>
                 {
                  data3.map((val)=>{
                     {/* const mergable=val.mergable; */}
                     const boxes = [];
                     if(val.mergable==='Yes')
                     {
                          setOccupancy(occupancy+Number(val.occupancy));

                     }
                   for (let i=0;i<occupancy;i++)
                    {
                      boxes.push(<div className="box"></div>);
                    }
                    return (
                      <div className="MainDivM">
                        <button
                         
                          onClick={() => SelectTable(occupancy)}
                        >
                          {boxes.map((box, index) => (
                            <div className="div" key={index}>
                              {box}
                            </div>
                          ))}
                        </button>
                      </div>
                    );
                  })
                 }
                 </div>

                  
                
                }
                <h1 className="mes2">Your Selected Table is:{sTable}</h1>
               {/* <button onClick={()=>ResevedT(selectedButton)}>Confirm</button> */}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Confirm;