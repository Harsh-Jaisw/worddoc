import React, { useState } from "react";
import ColorLensIcon from '@mui/icons-material/ColorLens';
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
import { icons, textPosition, textalign ,Emoji} from "../ConstData/ConstData";

function Navbar(props) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show3, setShow3] = useState(false);
  const [color, setColor] = useState("");
  const [font, setFont] = useState("");
  const [position, setPosition] = useState("");
  const [align, setAlign] = useState("");
  const [emoji, setEmoji] = useState("");
  const[show4, setShow4]=useState("")
function  handleAlignment(element){
  setAlign(element.action)
  document.execCommand(align);
}

  function handleColor(e) {
    setColor(e.target.value);
    document.execCommand("foreColor", "", color);
  }
  function handleFont(element) {
    setFont(element.action);
    document.execCommand("fontSize", "", font);
  }
  function handlebackgroundhighlight(e) {
    setColor(e.target.value);
    document.execCommand("backColor","",color)
  }
  function handlePosition(element) {
    setPosition(element.action);
    document.execCommand(position);
  }
function handleemoji(element){
  setEmoji(element.icon);
  document.execCommand('insertHTML', false, emoji);
}

  return (
    <div className={style.main}>
      <span className={style.container1}>
        {textPosition.map((element) => (
          <span onClick={() => handlePosition(element)}
          // className={style.icon}
          style={{ fontSize: "17px" ,fontWeight:"300"}}
          >{element.icon }</span>
        ))}

        <span className={style.colorbox}>
          <ColorLensIcon
            style={{ fontSize: "20" }}
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
            style={{ fontSize: "20" }}
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
            style={{ fontSize: "19" }}
            onClick={() => setShow4(!show4)}
          />
           {show4 ? (
            <>
              <div className={style.fontlist}>
              {Emoji.map((element) => (
                <p onClick={() => handleemoji(element)}>{element.icon}</p>
              ))}
            </div>
            </>
          ) : null}
        </div>
      </span>
      <span>
        <AddPhotoAlternateIcon style={{ fontSize: "19" }} />
      </span>
      <span className={style.container1}>
        <div className={style.fontsizecontainer}>
          <FormatSizeIcon
            style={{ fontSize: "21" }}
            onClick={() => setShow(!show)}
          />
          {show ? (
            <div className={style.fontlist}>
              {icons.map((element) => (
                <p onClick={() => handleFont(element)}>{element.icon}</p>
              ))}
            </div>
          ) : (
            <></>
          )}
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
