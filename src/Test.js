import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

import "./BookT.css";

function BookT() {
  const loc = useLocation();
  const nv1 = useNavigate();

  const data1 = loc.state.data;
  const [data, setData] = useState(data1);
  const [div, setDiv] = useState();
  const [person2, setPerson2] = useState(false);
  const [person4, setPerson4] = useState(false);
  const [person6, setPerson6] = useState(false);
  const [person8, setPerson8] = useState(false);
  const [person10, setPerson10] = useState(false);
  const [occupancy, setOccupancy] = useState(0);
  const [elder, setElder] = useState("");
  // const [kids, setKids] = useState("");
  const [totalperson, setTotalperson] = useState(0);
  const [showLayout, setShowLayout] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [sTable, setSTable] = useState("");
  const [color, setColor] = useState("#cb202d");
  const [date, setDate] = useState({
    date1: new Date().toISOString().slice(0, 10),
  });
  // const [time, setTime] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    phoneNo: "",
    totalperson: 0,
    date: date.date1,
    time: currentTime,
  });
  const [mes, setMes] = useState(false);
  console.log(userData);

  useEffect(() => {
    const getCurrentTime = () => {
      const currentDate = new Date();
      const hours = String(currentDate.getHours()).padStart(2, "0");
      const minutes = String(currentDate.getMinutes()).padStart(2, "0");
      const currentTimeString = `${hours}:${minutes}`;
      setCurrentTime(currentTimeString);
      setUserData((prevUserData) => ({
        ...prevUserData,
        time: currentTimeString,
      }));
    };

    getCurrentTime();
  }, []);
  useEffect(() => {
    console.log(totalperson);
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
      setSTable("");
    }
  }, [PersonC]);

  function PersonC() {
    // setUserData({...userData,date:date.date1,time:time})
    // console.log(date.date1)
    // console.log(time)
    setShowLayout(true);
    // const k = Number(kids);
    const el = Number(elder);
    setTotalperson(el);
    setUserData({ ...userData, totalperson: el });
  }
  function DisableDate() {
    return new Date().toISOString().split("T")[0];
    // setUserData({...userData,date:date});
  }
  function SelectTable(id) {
    setSelectedButton(id);
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

    setData((prevItems) =>
      prevItems.map((item) => {
        if (item.name === id) {
          setIsActive(true);

          return {
            ...item,
            select: true,
            // price:Number(item.price*(Number(item.q)+1))
          };
        }

        return item;
      })
    );
  }

  function Proceed(sTable) {
    console.log(sTable);
    setData((prevItems) =>
      prevItems.map((item) => {
        if (item.name === sTable) {
          setIsActive(true);

          return {
            ...item,
            reserved: true,
            select: true,
            // price:Number(item.price*(Number(item.q)+1))
          };
        }

        return item;
      })
    );
  }
  return (
    <div>
      <div className="bk2">
        {/* <div className="nameandphn">
        </div> */}
        <div className="booktable">
          <div className="Booking">
            <span>Enter Name:</span>
            <input
              type="text"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              required
            />
          </div>
          <div className="Booking">
            <span>Enter Phone No:</span>
            <input
              type="text"
              onChange={(e) =>
                setUserData({ ...userData, phoneNo: e.target.value })
              }
              required
            />
          </div>

          <div className="Booking">
            <span>Select Person:</span>
            {/* <div className="person"> */}
            <select onChange={(e) => setElder(e.target.value)} required>
              <option value="">--Select Persons--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            {/* <select onChange={(e) => setKids(e.target.value)} required>
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
                <option value="10">10</option>
                <option value="20">20</option>
              </select> */}
            {/* </div> */}
          </div>
          <div className="Booking">
            {" "}
            <span>Select Date:</span>
            <input
              type="date"
              value={userData.date}
              required
              onChange={(e) =>
                setUserData((prevUserData) => ({
                  ...prevUserData,
                  date: e.target.value,
                }))
              }
              min={DisableDate()}
            />
          </div>
          <div className="Booking">
            <span>Select Time:</span>
            <input
              type="time"
              value={userData.time}
              onChange={(e) =>
                setUserData((prevUserData) => ({
                  ...prevUserData,
                  time: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="showbtn">
          <button onClick={PersonC} className="btne" type="submit">
            Select Table
          </button>
        </div>

        <div>
          {showLayout && elder && date && (
            <>
              <div className="mainCon">
                {data.map((val) => {
                  const occupancy = val.Occupancy;
                  const boxes = [];
                  for (let i = 0; i < occupancy; i++) {
                    boxes.push(
                      <div
                        key={i}
                        style={{
                          backgroundColor:selectedButton === val.name && val.select ? "#cb202d": "green",
                          width: "50px",
                          height: "50px",
                          margin: "5px",
                        }}
                      ></div>
                    );
                  }
                  if (occupancy == "2") {
                    return (
                      <div className="MainDiv2" key={val.name}>
                        <button
                          disabled={person2 || val.reserved === true}
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
                          disabled={person4 || val.reserved === true}
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
                          disabled={person6 || val.reserved === true}
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
                          disabled={person8 || val.reserved === true}
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
                  } else if (occupancy == "10") {
                    return (
                      <div className="MainDiv10">
                        <button
                          disabled={person10 || val.reserved === true}
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
                {
                  mes && (
                    <h1 className="mes3">
                      Total Persons are greter than 10 so Your Table will be
                      arranged by Restaurent Staff
                    </h1>
                  )

                  /* <div>
                 {
                  data.map((val)=>{
                     const mergable=val.mergable;
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
                 </div> */
                }
                <h1 className="mes2">Your Selected Table is:{sTable}</h1>
                <button className="button3" onClick={() => Proceed(sTable)}>
                  Proceed
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookT;