import React, { useRef } from "react";
import "./css/Cover.css";
// import SwiperCover from "./SwiperCover";
const Cover = () => {
  const sliderRef = useRef();
  const nextSlide = () => {
    let slides = document.querySelectorAll(".slides");
    sliderRef.current.appendChild(slides[0]);
  }
  const prevSlide = () => {
    let slides = document.querySelectorAll(".slides");
    sliderRef.current.prepend(slides[slides.length - 1]);
  }
  return (
    <section id="cover_as">
      <div id="slider_div">
        <div className="slider" ref={sliderRef}>
          <div className="slides" style={{ '--img': `url(/assets/images/cover/kharkov.jpeg)` }}>
            <div className="content">
              <h2>Ukraynada təhsil</h2>
              <ul>
                <li> <i class="fa-solid fa-check"></i> Online tədris</li>
                <li><i class="fa-solid fa-check"></i> Tanınan diplom</li>
                <li><i class="fa-solid fa-check"></i> Hərbi möhlət</li>
              </ul>
            </div>
          </div>
          <div className="slides" style={{ '--img': `url(/assets/images/cover/istanbul.webp)` }}>
            <div className="content">
              <h2>istanbul</h2>
              <p>Xarkovda tehsil cox yaxsidir</p>
            </div>
          </div>
          <div className="slides" style={{ '--img': `url(/assets/images/cover/poland.jpg)` }}>
            <div className="content">
              <h2>poland</h2>
              <p>Xarkovda tehsil cox yaxsidir</p>
            </div>
          </div>
          <div className="slides" style={{ '--img': `url(/assets/images/cover/turkiye.png)` }}>
            <div className="content">
              <h2>turkiye</h2>
              <p>Xarkovda tehsil cox yaxsidir</p>
            </div>
          </div>
          <div className="slides" style={{ '--img': `url(/assets/images/cover/kharkov.jpeg)` }}>
            <div className="content">
              <h2>Kharkov</h2>
              <p>Xarkovda tehsil cox yaxsidir</p>
            </div>
          </div>
          <div className="slides" style={{ '--img': `url(/assets/images/cover/istanbul.webp)` }}>
            <div className="content">
              <h2>istanbul</h2>
              <p>Xarkovda tehsil cox yaxsidir</p>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="prev" onClick={prevSlide}></button>
          <button className="next" onClick={nextSlide}></button>
        </div>
      </div>
      {/* <SwiperCover /> */}
    </section >
  );
};

export default Cover;
