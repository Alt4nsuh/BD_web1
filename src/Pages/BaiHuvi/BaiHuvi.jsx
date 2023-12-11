import React, { useEffect, useState } from "react";
import "./BaiHuvi.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import logo from "../Image/logo.png";
import Cookies from "js-cookie";
import { Scrollbars } from "react-custom-scrollbars";

function BaiHuvi() {
  const [bai, setBai] = useState([]);
  const [tetgeleg, setTetgeleg] = useState([]);
  const [edit, setEdit] = useState(false);
  const id = Cookies.get("h_id");

  useEffect(() => {
    const fetchBaiData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/Bai/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response && response.ok) {
          const data = await response.json();
          setBai(data);
          console.log(data);
        } else {
          console.error(
            "Error retrieving Bai data:",
            response ? response.statusText : "Unknown error"
          );
        }
      } catch (error) {
        console.error("Error submitting form:", error.message);
      }
    };

    if (id) {
      fetchBaiData();
    }
  }, [id]);

  useEffect(() => {
    const fetchTetgelegData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/tetgelegShow/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response && response.ok) {
          const data = await response.json();
          setTetgeleg(data);
          console.log("hiiii", data);
        } else {
          console.error(
            "Error retrieving Tetgeleg data:",
            response ? response.statusText : "Unknown error"
          );
        }
      } catch (error) {
        console.error("Error submitting form:", error.message);
      }
    };
    if (id) {
      fetchTetgelegData();
    }
  }, [id]);
  return (
    <div>
      <div className="Bai-body">
        <Header />
        <div className="leftBar">
          <h1>Байгууллагын профайл</h1>
          <img src={logo} alt="Logo" width="200" height="100" />
        </div>
        <div className="rightBar">
          <span>{bai.h_ner}</span>
          <h5>Утас</h5>
          <span>{bai.h_utas}</span>
          <h5>gmail</h5>
          <span>{bai.h_gmail}</span>
          <button onClick={() => setEdit(!edit)}>
            {!edit ? "Засах" : "Буцах"}
          </button>
          {edit && <button>sda</button>}
        </div>
      </div>
      <Scrollbars
      style={{ height: 300 }}
      autoHide
      autoHideTimeout={1000} // Set a timeout value in milliseconds
      autoHideDuration={200}  // Set a duration value in milliseconds
      renderTrackHorizontal={(props) => <div {...props} className="track-horizontal" />}
      renderThumbHorizontal={(props) => <div {...props} className="thumb-horizontal" />}
    >
      <div className="horizontal-section">
        {tetgeleg.map((item, index) => (
          <div key={index} className="ImgDev">
            <img className="inputAdd" src={item.tetgeleg_zurag} alt={`Image ${index}`} />
            <p>{item.tetgeleg_ner}</p>
          </div>
        ))}
      </div>
    </Scrollbars>
    </div>
  );
}

export default BaiHuvi;
