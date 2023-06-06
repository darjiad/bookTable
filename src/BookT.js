import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

import "./BookT.css";

function BookT() {
  const loc = useLocation();
   const data1 = loc.state.data;
  const [data, setData] = useState(data1);

  const [elder, setElder] = useState("");
  // const [kids, setKids] = useState("");
  const [totalperson, setTotalperson] = useState(0);
  const [showLayout, setShowLayout] = useState(false);

  const [selectedButton, setSelectedButton] = useState(null);
  const [sTable, setSTable] = useState("");

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

    data.map((val) => {
      if (val.name === id) {
        setSTable(id);
      }
    });

    setData((prevItems) =>
      prevItems.map((item) => {
        if (item.name === id) {
          // setIsActive(true);

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
          // setIsActive(true);

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
                          backgroundColor:
                            selectedButton === val.name && val.select
                              ? "#cb202d"
                              : "green",
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
                                <td key={index}>
                                  <button
                                    disabled={
                                      val.reserved === true ||
                                      occupancy<totalperson
                                    }
                                    onClick={() => SelectTable(val.name)}
                                  >
                                    {box}
                                  </button>
                                </td>
                              ))}
                            </tr>
                            <tr>
                              {secondRow.map((box, index) => (
                                <td key={index}>
                                  <button
                                    disabled={
                                      val.reserved === true ||
                                      occupancy<totalperson
                                    }
                                    onClick={() => SelectTable(val.name)}
                                  >
                                    {box}
                                  </button>
                                </td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  if (occupancy % 2 === 1) {
                    const halfNumber = Math.floor(occupancy / 2);
                    console.log(halfNumber);
                    const firstRowBoxes = boxes.slice(0, halfNumber);
                    const secondRowBox = boxes[halfNumber];
                    const thirdRowBoxes = boxes.slice(
                      halfNumber + 1,
                      occupancy
                    );

                    return (
                      <div className="MainDiv" key={val.name}>
                        <table>
                          <tbody>
                            <tr>
                              {firstRowBoxes.map((box, index) => (
                                <td key={index} rowSpan={2}>
                                  <button
                                    disabled={
                                      val.reserved === true ||
                                      occupancy<totalperson
                                    }
                                    onClick={() => SelectTable(val.name)}
                                  >
                                    {" "}
                                    {box}
                                  </button>
                                </td>
                              ))}
                              <td>
                                <div></div>
                              </td>
                            </tr>
                            <tr>
                              <td rowSpan="2">
                                <button
                                  disabled={
                                    val.reserved === true ||
                                    occupancy<totalperson
                                  }
                                  onClick={() => SelectTable(val.name)}
                                >
                                  {secondRowBox}
                                </button>
                              </td>
                            </tr>
                            <tr>
                              {thirdRowBoxes.map((box, index) => (
                                <td key={index}>
                                  <button
                                    disabled={
                                      val.reserved === true ||
                                        occupancy<totalperson
                                    }
                                    onClick={() => SelectTable(val.name)}
                                  >
                                    {box}
                                  </button>
                                </td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                })}
              </div>

              <div>
                {mes && (
                  <h1 className="mes3">
                    Total Persons are greter than 10 so Your Table will be
                    arranged by Restaurent Staff
                  </h1>
                )}
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
