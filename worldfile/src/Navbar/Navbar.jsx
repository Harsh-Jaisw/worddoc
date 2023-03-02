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
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import TextFormatIcon from "@mui/icons-material/TextFormat";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
// import SegmentIcon from "@mui/icons-material/Segment";
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
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
       
        <TextDecreaseIcon style={{ fontSize: "22" }}  onClick={props.handleFontSizeh1}/>
        <TextIncreaseIcon style={{ fontSize: "22" }}  onClick={props.handleFontSizeh2}/>
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
        <UnfoldMoreIcon />
      </span>
      <span className={style.container1}>
        <p>Normal</p>
        <UnfoldMoreIcon />
      </span>
      <span className={style.container1}>
        <TextFormatIcon onClick={props.handlebackgroundhighlight}/>
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
