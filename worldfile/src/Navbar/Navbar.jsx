import React, { useState, useRef } from "react";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import SubscriptIcon from "@mui/icons-material/Subscript";
import SuperscriptIcon from "@mui/icons-material/Superscript";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import style from "./Navbar.module.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { icons, textPosition, textalign, Emoji } from "../ConstData/ConstData";

function Navbar(props) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show3, setShow3] = useState(false);
  const [color, setColor] = useState("");
  const [position, setPosition] = useState("");
  const [align, setAlign] = useState("");

  // const [image, setImage] = useState("");
  // const inputRef = useRef(null);
  function handleAlignment(element) {
    setAlign(element.action);
    document.execCommand(align);
  }

  function handleColor(e) {
    setColor(e.target.value);
    document.execCommand("foreColor", "", color);
  }
  function handleFont(e) {
    // setFont(e.target.value);
    document.execCommand("fontSize", "", e.target.value);
  }
  function handlebackgroundhighlight(e) {
    setColor(e.target.value);
    document.execCommand("backColor", "", color);
  }
  function handlePosition(element) {
    setPosition(element.action);
    document.execCommand(position);
  }


  function handleemoji(e) {

    if(e.target.value === 'smile'){
      document.execCommand("insertHTML", false, "&#128516");
    }
    if(e.target.value === 'angry'){
      document.execCommand("insertHTML", false, "&#128520");
    }
    if(e.target.value === 'love'){
      document.execCommand("insertHTML", false, "&#128525");
    }
    if(e.target.value === 'kiss'){
      document.execCommand("insertHTML", false, "&#128536");
    }
    if(e.target.value === 'thumup'){
      document.execCommand("insertHTML", false, "&#128077");
    }
    if(e.target.value === 'thumdown'){
      document.execCommand("insertHTML", false, "&#128078");
    }
   
  }


  return (
    <div className={style.main}>
      <span className={style.container1}>
        {textPosition.map((element) => (
          <span onClick={() => handlePosition(element)}>{element.icon}</span>
        ))}

        <span className={style.colorbox}>
          <ColorLensIcon
            style={{ fontSize: "19px",marginTop:'-0.5rem' }}
            onClick={() => setShow1(!show1)}
          />
          {show1 ? (
            <>
              <input
                className={style.inputbox}
                type="color"
                onChange={(e) => handleColor(e)}
              />
            </>
          ) : null}
        </span>
        <span className={style.colorbox}>
          <BorderColorIcon
            style={{ fontSize: "18px",marginTop:'-0.5rem'  }}
            onClick={() => setShow3(!show3)}
          />
          {show3 ? (
            <>
              <input
                className={style.inputbox}
                type="color"
                onChange={(e) => handlebackgroundhighlight(e)}
              />
            </>
          ) : null}
        </span>
      </span>

      <span className={style.container1}>
        <div className={style.fontsizecontainer}>
          <AddReactionIcon
            style={{ fontSize: "18px", fontWeight: "400",marginTop:'-0.5rem'  }}
          />
              <div className={style.fontlist}>
              <select onChange={(e) => handleemoji(e)}>
                <option>emojis</option>
                {Emoji.map((element) => (
                   <option >{element.icon}</option>
                ))}
                </select>
              </div>
          
        </div>
        <div>
          <AddPhotoAlternateIcon
            style={{ fontSize: "20", marginLeft: "7px",marginTop:'-0.5rem',fontWeight:'lighter' }}
          />
        </div>
      </span>

      <span className={style.container1}>
        <div className={style.fontsizecontainer}>
          <FormatSizeIcon
            style={{ fontSize: "21",marginTop:'-0.5rem'  }}
      
          />
            <div className={style.fontlist}>
              <select onChange={(e) => handleFont(e)}>
              <option>1</option>
              {icons.map((element) => (
                  <option >{element.icon}</option>
              
              ))}
              </select>
            </div>
          
        </div>
      </span>

      <span className={style.container1}>
        {textalign.map((element) => (
          <p onClick={() => handleAlignment(element)}>{element.icon}</p>
        ))}
      </span>
      <span className={style.container1}>
        <SubscriptIcon style={{ fontSize: "21" }} />
        <SuperscriptIcon style={{ fontSize: "21" }} />
      </span>
      <span className={style.container1}>
        <FormatIndentDecreaseIcon style={{ fontSize: "21" }} />
        <FormatIndentIncreaseIcon style={{ fontSize: "21" }} />
      </span>
      <span className={style.container1}>
        <p>Normal</p>
        <UnfoldMoreIcon onClick={props.handleremoveFormat} />
      </span>
      <span className={style.container1}>
        <TextFormatIcon style={{ fontSize: "21" }} />
        <FormatShapesIcon style={{ fontSize: "21" }} />
      </span>
      <span className={style.container1}>
        <p>Sans Serif</p>
        <UnfoldMoreIcon
          style={{ fontSize: "21" }}
          onClick={props.downloadFile}
        />
      </span>
    </div>
  );
}

export default Navbar;
