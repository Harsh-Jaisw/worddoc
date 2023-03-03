import React, { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import GoogleIcon from "@mui/icons-material/Google";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import SubscriptIcon from "@mui/icons-material/Subscript";
import SuperscriptIcon from "@mui/icons-material/Superscript";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import style from "./Navbar.module.css";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Looks5Icon from "@mui/icons-material/Looks5";
import Looks6Icon from "@mui/icons-material/Looks6";
function Navbar(props) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [color, setColor] = useState("");

  props.handleColor(color);

  return (
    <div className={style.main}>
      <span className={style.container1}>
        <FormatBoldIcon style={{ fontSize: "22" }} onClick={props.handlebold} />
        <FormatItalicIcon
          style={{ fontSize: "22" }}
          onClick={props.handleItalic}
        />
        <FormatUnderlinedIcon
          style={{ fontSize: "22" }}
          onClick={props.handleUnderline}
        />
        <span className={style.colorbox}>
          <GoogleIcon
            style={{ fontSize: "18" }}
            onClick={() => setShow1(!show1)}
          />
          {show1 ? (
            <>
              {" "}
              <input
                className={style.inputbox}
                type="color"
                onChange={(e) => setColor(e.target.value)}
              />
            </>
          ) : null}
        </span>
      </span>

      <span className={style.container1}>
        <TextDecreaseIcon
          style={{ fontSize: "22" }}
          onClick={props.handleFontSizeh1}
        />
        <TextIncreaseIcon
          style={{ fontSize: "22" }}
          onClick={props.handleFontSizeh2}
        />
      </span>
      <span className={style.container1}>
        <div className={style.fontsizecontainer}>
          <FormatSizeIcon
            style={{ fontSize: "22" }}
            onClick={() => setShow(!show)}
          />
          {show ? (
            <div className={style.fontlist}>
              <LooksOneIcon onClick={props.font1} />
              <LooksTwoIcon onClick={props.font2} />
              <Looks3Icon onClick={props.font3} />
              <Looks4Icon onClick={props.font4} />
              <Looks5Icon onClick={props.font5} />
              <Looks6Icon onClick={props.font6} />
              <p onClick={props.font7}>7</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </span>

      <span className={style.container1}>
        <FormatAlignCenterIcon
          style={{ fontSize: "22" }}
          onClick={props.handlejustifyCenter}
        />
        <FormatAlignLeftIcon style={{ fontSize: "22" }} onClick={props.handlejustifyLeft}/>
        <FormatAlignRightIcon style={{ fontSize: "22" }} onClick={props.handlejustifyRight}/>
      </span>
      <span className={style.container1}>
        <SubscriptIcon />
        <SuperscriptIcon />
      </span>
      <span className={style.container1}>
        <FormatIndentDecreaseIcon style={{ fontSize: "22" }} />
        <FormatIndentIncreaseIcon style={{ fontSize: "22" }} />
      </span>
      <span className={style.container1}>
        <p >Normal</p>
        <UnfoldMoreIcon onClick={props.handleremoveFormat}/>
      </span>
      <span className={style.container1}>
        <p>Normal</p>
        <UnfoldMoreIcon />
      </span>
      <span className={style.container1}>
        <TextFormatIcon onClick={props.handlebackgroundhighlight} />
        <FormatShapesIcon style={{ fontSize: "22" }} />
      </span>
      <span className={style.container1}>
        <p>Sans Serif</p>
        <UnfoldMoreIcon />
      </span>
    </div>
  );
}

export default Navbar;
