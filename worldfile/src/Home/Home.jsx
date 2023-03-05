import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Navbar1 from "../Navbar1/Navbar1";
import style from "./Home.module.css";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function Home() {
 const[value,setValue]=useState("")
  function handleremoveFormat(color) {
    document.execCommand("removeFormat");
  }

  const downloadFile = () => {
    const link = document.createElement("a");
    const content = document.querySelector("p").textContent; // Get the text content of the <p> element
    
    const file = new Blob([content], { type: "application/pdf" }); // Set the correct MIME type for a PDF file
    console.log(file)
    link.href = URL.createObjectURL(file);
    link.download = "sample.pdf";
    document.body.appendChild(link); // Append the link to the DOM before clicking it
    link.click();
    document.body.removeChild(link); // Remove the link from the DOM after it's clicked
    URL.revokeObjectURL(link.href);
  };
  

  return (
    <div className={style.main}>
      <Navbar1 />
      <Navbar
        handleremoveFormat={handleremoveFormat}
        downloadFile={downloadFile}
      />

      <div className={style.box}>
        <p className={style.txt} contentEditable={true}
        onChange={(e)=>setValue(e.target.value)}
        ></p>
          <Fab size="small" color="secondary" aria-label="add" 
     className={style.floaticon}
     >
        <AddIcon />
      </Fab>
      </div>
    
    </div>
  );
}

export default Home;
