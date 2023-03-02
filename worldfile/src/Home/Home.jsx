import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import style from "./Home.module.css";

function Home() {
  const [selectedvalue, setSelectedValue] = useState("");
  function handleSelect(e) {
    setSelectedValue(e.target.value);
  }
  return (
    <div className={style.main}>
      <Navbar />
      <div className={style.box}>
        <textarea
          name="w3review"
          rows="999"
          cols="999"
          onChange={(e) => handleSelect(e)}
          className={style.text}
          value={selectedvalue}
        />
      </div>
    </div>
  );
}

export default Home;
