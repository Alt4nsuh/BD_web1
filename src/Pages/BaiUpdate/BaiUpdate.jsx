import React, { useEffect, useState } from "react";
import "./BaiUpdate.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Cookies from "js-cookie";
import axios from "axios";
import { Scrollbars } from "react-custom-scrollbars";

function BaiUpdate() {
  const [bai, setBai] = useState({ h_ner: "", h_utas: "", h_gmail: "" });
  const { id } = useParams();

  const fetchBaiData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/Bai/${id}`);
      if (response && response.data) {
        setBai(response.data);
        console.log("hiiii", response.data);
      } else {
        console.error(
          "Error retrieving Bai data:",
          response ? response.statusText : "Unknown error"
        );
      }
    } catch (error) {
      console.error("Error retrieving Bai data:", error);
    }
  };

  const updateBai = async () => {
    try {
      const baiguullaga = {
        bai_ner: bai.h_ner,
        bai_utas: bai.h_utas,
        bai_gmail: bai.h_gmail,
      }
        const response = await axios.post(`http://localhost:8000/api/BaiUpdate/${id}`, baiguullaga);

      if (response && response.data) {
        console.log("Bai updated successfully:", response.data);
        // You may want to navigate to another page after successful update
      } else {
        console.error(
          "Error updating Bai data:",
          response ? response.statusText : "Unknown error"
        );
      }
    } catch (error) {
      console.error("Error updating Bai data:", error.message);
    }
  };

  useEffect(() => {
    if (id) {
      fetchBaiData();
    }
  }, [id]);

  return (
    <div>
      <Header />
      <div id="TetEronhii" className="TetEronhii1">
        <h1>Байгууллага мэдээлэл шинэчлэх</h1>
        <h3>Байгууллага нэр</h3>
        <input
        type="text"
          className="putAdd"
          id="bai_ner"
          value={bai.h_ner}
          onChange={(e) => setBai({ ...bai, h_ner: e.target.value })}
        />
        <h3>Байгууллага Утас</h3>
        <input
        type="text"
          className="putAdd"
          id="bai_utas"
          value={bai.h_utas}
          onChange={(e) => setBai({ ...bai, h_utas: e.target.value })}
        />
        <h3>Байгууллага Майл</h3>
        <input
          type="email"
          className="putAdd"
          id="bai_gmail"
          value={bai.h_gmail}
          onChange={(e) => setBai({ ...bai, h_gmail: e.target.value })}
        />
        <button onClick={updateBai}>Шинэчлэх</button>
      </div>
    </div>
  );
}

export default BaiUpdate;
