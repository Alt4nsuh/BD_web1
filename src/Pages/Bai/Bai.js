import React, { useState } from "react";
import "./Bai.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Cookies from "js-cookie";
import axios from "axios";
function Bai() {
  const h_id = Cookies.get("h_id");
  const [tetgeleg, setTetgeleg] = useState([]);
  const [tetgelegNer, setTetgelegNer] = useState("");
  const [tetgelegHugatsaa, setTetgelegHugatsaa] = useState("");
  const [tetgelegTuhai, setTetgelegTuhai] = useState("");
  const [tetgelegZurag, setTetgelegZurag] = useState("");
  const [hamrahHuree, setHamrahHuree] = useState([]);
  const [tawigdahShaardlaga, setTawigdahShaardlaga] = useState([]);
  const [burduulehMaterial, setBurduulehMaterial] = useState([]);
  const [holbooBarih, setHolbooBarih] = useState([]);

  const handleHolbooBarih = (e, index) => {
    const updatedHolbooBarih = [...holbooBarih];
    updatedHolbooBarih[index] = e.target.value;
    setHolbooBarih(updatedHolbooBarih);
  };

  const addHolbooBarih = () => {
    const next = holbooBarih.length;
    console.log(holbooBarih);
    setHolbooBarih((prevHolbooBarih) => [...prevHolbooBarih, { [next]: "" }]);
  };

  const handleBurduulehMaterial = (e, index) => {
    const updatedBurduulehMaterial = [...burduulehMaterial];
    updatedBurduulehMaterial[index] = e.target.value;
    setBurduulehMaterial(updatedBurduulehMaterial);
  };

  const addBurduulehMaterial = () => {
    const next = burduulehMaterial.length;
    console.log(burduulehMaterial);
    setBurduulehMaterial((prevBurduulehMaterial) => [
      ...prevBurduulehMaterial,
      { [next]: "" },
    ]);
  };

  const handleTawigdahShaardlaga = (e, index) => {
    const updatedTawigdahShaardlaga = [...tawigdahShaardlaga];
    updatedTawigdahShaardlaga[index] = e.target.value;
    setTawigdahShaardlaga(updatedTawigdahShaardlaga);
  };

  const addTawigdahShaardlaga = () => {
    const next = tawigdahShaardlaga.length;
    console.log(tawigdahShaardlaga);
    setTawigdahShaardlaga((prevTawigdahShaardlaga) => [
      ...prevTawigdahShaardlaga,
      { [next]: "" },
    ]);
  };

  const handleHamrahHuree = (e, next) => {
    setHamrahHuree((prevHamrahHuree) => [...prevHamrahHuree, { [next]: "" }]);
  };

  const addHamrahHuree = () => {
    const next = Object.keys(hamrahHuree).length;
    setHamrahHuree((prevHamrahHuree) => [...prevHamrahHuree, { [next]: "" }]);
  };
  const handleTetgelegNer = (e) => {
    setTetgelegNer(e.target.value);
  };

  const handleTetgelegHugatsaa = (e) => {
    setTetgelegHugatsaa(e.target.value);
  };

  const handleTetgelegTuhai = (e) => {
    setTetgelegTuhai(e.target.value);
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        setTetgelegZurag(reader.result);
      };
    }
  };

  const addTetgeleg = () => {
    const fetch = async () => {
      try {
        const response = await axios
          .post(`http://localhost:3001/tetgelegInsert`, {
            bai_id: h_id,
            tetgeleg_ner: tetgelegNer,
            tetgeleg_hugatsaa: tetgelegHugatsaa,
            tetgeleg_tuhai: tetgelegTuhai,
            tetgeleg_zurag: tetgelegZurag,
            hamrah_huree: hamrahHuree,
            tawigdah_shaardlaga: tawigdahShaardlaga,
            burduuleh_material: burduulehMaterial,
            holboo_barih: holbooBarih,
          })
          .then((response) => setTetgeleg())
          .catch((e) => console.log(e));
      } catch (error) {}
    };

    fetch();
  };

  return (
    <div className="mainBai">
      <Header />

      <div className="secHead">
        <a href="#TetEronhii">
          Тэтгэлгийн <br></br>ерөнхий <br></br>мэдээлэл
        </a>
        <a href="#TetShaardlaga">
          Тэтгэлэгт <br></br>тавигдах <br></br>шаардлага
        </a>
        <a href="#TetMateral">
          Бүрдүүлэх <br></br>материал
        </a>
        <a href="#TetHolboo">
          Холбоо <br></br>барих
        </a>
      </div>

      <div className="BaiBody">
        <div id="TetEronhii" className="TetEronhii">
          <h1>Тэтгэлгийн ерөнхий мэдээлэл</h1>
          <h3>Тэтгэлгийн нэр</h3>
          <input className="inputAdd" id="tetgeleg_ner" onChange={handleTetgelegNer}></input>
          <h3>Тэтгэлгийн үргэлжлэх хугацаа</h3>
          <input className="inputAdd" id="tetgeleg_hugatsaa" onChange={handleTetgelegHugatsaa}></input>
          <h3>Тэтгэлгийн тухай</h3>
          <input className="inputAdd" id="tetgeleg_tuhai" onChange={handleTetgelegTuhai}></input>

          <input
            className="inputAdd"
            type="file"
            id="tetgeleg_zurag"
            accept="tetgelegZurag/*"
            onChange={handleImageChange}
          />
          {tetgelegZurag && (
            <img
              width={200}
              height={200}
              src={tetgelegZurag ? tetgelegZurag : null}
              alt="Selected"
            />
          )}
        </div>
        <div id="TetShaardlaga" className="TetShaardlaga">
          <h1>Тэтгэлэгт тавигдах шаардлага</h1>
          <h3>Тавигдах шаардлага нэмэх </h3>{" "}
          <button onClick={addTawigdahShaardlaga}> + </button>
          <div id="Shaardlaga">
            {tawigdahShaardlaga.map((item, index) => (
              <input
                className="inputAdd"
                key={index}
                type="text"
                onChange={(e) => handleTawigdahShaardlaga(e, index)}
              />
            ))}
          </div>
        </div>
        <div id="TetMateral" className="TetMateral">
          <h1>Бүрдүүлэх материал</h1>
          <button onClick={addBurduulehMaterial}> + </button>
          <div id="Matiral">
            {burduulehMaterial.map((item, index) => (
              <input
                className="inputAdd"
                key={index}
                type="text"
                onChange={(e) => handleBurduulehMaterial(e, index)}
              />
            ))}
          </div>
        </div>
        <div id="TetHolboo" className="TetHolboo">
          <h1>Холбоо барих</h1>
          <button onClick={addHolbooBarih}> + </button>
          <div id="Holboo">
            {holbooBarih.map((item, index) => (
              <input
                className="inputAdd"
                key={index}
                type="text"
                onChange={(e) => handleHolbooBarih(e, index)}
              />
            ))}
          </div>
        </div>
      </div>
      <button onClick={addTetgeleg}>Нэмэх</button>
    </div>
  );
}

export default Bai;
