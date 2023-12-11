import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../ProfileSideBar/sideBar";
import CardTet from "./cardTet/cardTet";

const nemsenTet = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="nemsenTet">
        <div className="tetHeader">
          <a href="#">Бүгд</a>
          <a href="#">Шүүх</a>
          <a href="#">Календар</a>
        </div>
        <div className="cards">
          <CardTet
            img="logo192.png"
            companyName="Tetgeleg"
            date="2023 - 11 - 06"
            type="Сайн дурын хөтөлбөр"
            title="Тэтгэлэгийн хөтөлбөрөө зарлаж байна"
            tag="#volunteer"
          />
          <CardTet
            img="logo192.png"
            companyName="U.S Embassy"
            date="2023 - 12 - 15"
            type="Солилцоо"
            title="Global UGRAD хөтөлбөр зарлагдлаа"
            tag="#urgad #солилцоо"
          />
          <CardTet
            img="logo192.png"
            companyName="Oyu Tolgoi"
            date="2023 - 11 - 30"
            type="Бүрэн тэтгэлэг"
            title="Гадаадын магистрын тэтгэлэг хүлээн авч байна"
            tag="#oyutolgoi #магистр"
          />
        </div>
      </div>
    </div>
  );
};

export default nemsenTet;
