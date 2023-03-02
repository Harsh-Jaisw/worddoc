import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import style from "./Home.module.css";

function Home() {
    const [selectedWord, setSelectedWord] = useState('');

  function handleSelection() {
    const selection = window.getSelection();
    const selectedWord = selection.toString().trim();
    setSelectedWord(selectedWord);
  }

  function handleBold() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedWord = selection.toString().trim();
    if (selectedWord) {
      const newNode = document.createElement('b');
      newNode.appendChild(document.createTextNode(selectedWord));
      range.deleteContents();
      range.insertNode(newNode);
    }
  }
  function handleUnderline() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedWord = selection.toString().trim();
    if (selectedWord) {
      const newNode = document.createElement('u');
      newNode.appendChild(document.createTextNode(selectedWord));
      range.deleteContents();
      range.insertNode(newNode);
    }
  }

  function handleItalic() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedWord = selection.toString().trim();
    if (selectedWord) {
      const newNode = document.createElement('i');
      newNode.appendChild(document.createTextNode(selectedWord));
      range.deleteContents();
      range.insertNode(newNode);
    }
  }
  function handlebackgroundhighlight() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedWord = selection.toString().trim();
    if (selectedWord) {
      const newNode = document.createElement('span');
      newNode.appendChild(document.createTextNode(selectedWord));
      newNode.style.backgroundColor = "yellow";
      range.deleteContents();
      range.insertNode(newNode);
    }
  }
  function handleFontSizeh2() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedWord = selection.toString().trim();
    if (selectedWord) {
      const newNode = document.createElement('span');
      newNode.appendChild(document.createTextNode(selectedWord));
      newNode.style.font = "  20px arial,serif";
      range.deleteContents();
      range.insertNode(newNode);
    }
  }
  function handleFontSizeh1() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedWord = selection.toString().trim();
    if (selectedWord) {
      const newNode = document.createElement('span');
      newNode.appendChild(document.createTextNode(selectedWord));
      newNode.style.font = "  15px arial,serif";
      range.deleteContents();
      range.insertNode(newNode);
    }
  }
 
 
  return (
    <div className={style.main}>
      <Navbar 
      handlebold={handleBold}
      handleUnderline={handleUnderline}
      handleItalic={handleItalic}
      handlebackgroundhighlight={ handlebackgroundhighlight}
      handleFontSizeh2={ handleFontSizeh2}
     handleFontSizeh1={handleFontSizeh1}
      // handleflexend={handleflexend}
      />
      <div className={style.box}>
      <p className={style.text} onMouseUp={handleSelection} contentEditable={true}>
         
        </p>
      </div>
    </div>
  );
}

export default Home;
