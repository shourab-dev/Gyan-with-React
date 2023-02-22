import { Link } from "react-router-dom";
import { CommonCss } from "../constant";


export default function PrimaryButton({ href, name,margin, bgColor }) {

  //* PRIMARYBUTTON STYLING
  const PrimaryButtonStyles = {
    background: bgColor ? bgColor : CommonCss.secondaryColor  ,
    color: "white",
    fontSize: "20px",
    display: "inline-block",
    borderRadius: "5px",
    padding: "10px 20px",
    textTransform: "capitalize",
    margin: margin ? margin : "0px",
  };




  return (
    <Link style={PrimaryButtonStyles} to={href ? href : "#"}>
      {name} {console.log(CommonCss.primaryColor)}
    </Link>
  );
}
