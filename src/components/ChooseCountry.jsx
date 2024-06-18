import "./css/ChooseCountry.css";
import React, { useState } from "react";
// import { readData } from "../api/dbservice";
const ChooseCountry = () => {
  const [universities, setUniversities] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const countries = [
    "Ukrayna",
    "Türkiyə",
    "Polşa",
    "Almanya",
    "Rusya",
    "Amerika",
    "Kanada",
  ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const path = "/universities";
  //     try {
  //       const result = await readData(path);
  //       console.log(result);
  //       setUniversities(result);
  //     } catch (error) {
  //       console.error("Error reading data: ", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <section id="chooseCountry">
      <div className="container">
        <ul>
          {countries.map((country, index) => (
            <li
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => setActiveIndex(index)}
              style={{ cursor: "pointer" }}
            >
              {country}
            </li>
          ))}
        </ul>
        <div id="univerities_cards">
          <div className="university_card">
            <div className="university_card_image">
              <img src="/assets/images/cover/berlin_tech_uni.jpg" alt="" />
            </div>
            <div className="university_card_text">
              <span>Berlin Texniki universiteti</span>
              <h4>Berlin</h4>
            </div>
          </div>
          <div className="university_card">
            <div className="university_card_image">
              <img src="/assets/images/cover/berlin_tech_uni.jpg" alt="" />
            </div>
            <div className="university_card_text">
              <span>Berlin Texniki universiteti</span>
              <h4>Berlin</h4>
            </div>
          </div>
          <div className="university_card">
            <div className="university_card_image">
              <img src="/assets/images/cover/kharkov_national_medical_univeristy.jpg" alt="" />
            </div>
            <div className="university_card_text">
              <span>Xarkov Milli Medikal Universiteti</span>
              <h4>Xarkov</h4>
            </div>
          </div>
          <div className="university_card">
            <div className="university_card_image">
              <img src="/assets/images/cover/kharkov.jpeg" alt="" />
            </div>
            <div className="university_card_text">
              <span>Berlin Texniki universiteti</span>
              <h4>Berlin</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseCountry;
