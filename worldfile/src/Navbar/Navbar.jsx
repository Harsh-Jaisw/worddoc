import React from "react";
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
import HeightIcon from "@mui/icons-material/Height";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import SegmentIcon from "@mui/icons-material/Segment";
import style from "./Navbar.module.css";

function Navbar(props) {
  return (
    <div className={style.main}>
      <span className={style.container1}>
        <FormatBoldIcon style={{ fontSize: "22" }} onClick={props.handlebold}/>
        <FormatItalicIcon style={{ fontSize: "22" }} onClick={props.handleItalic} />
        <FormatUnderlinedIcon style={{ fontSize: "22" }} onClick={props.handleUnderline} />
        <GoogleIcon style={{ fontSize: "18" }} />
      </span>

      <span className={style.container1}>
        <h2>H1</h2>
        <h2>H2</h2>
      </span>
      <span className={style.container1}>
        <FormatSizeIcon style={{ fontSize: "22" }} />
      </span>

      <span className={style.container1}>
        <FormatAlignCenterIcon style={{ fontSize: "22" }} />
        <FormatAlignLeftIcon style={{ fontSize: "22" }} />
        <FormatAlignRightIcon style={{ fontSize: "22" }} />
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
        <p>Normal</p>
        <HeightIcon />
      </span>
      <span className={style.container1}>
        <p>Normal</p>
        <HeightIcon />
      </span>
      <span className={style.container1}>
        <TextFormatIcon />
        <FormatShapesIcon style={{ fontSize: "22" }} />
      </span>
      <span className={style.container1}>
        <p>Sans Serif</p>
        <HeightIcon />
      </span>
    </div>
  );
}

export default Navbar;
