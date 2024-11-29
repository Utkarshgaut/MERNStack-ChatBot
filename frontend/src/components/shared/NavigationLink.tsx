// import React from "react";
// import AppBar from "@mui/materia1/AppBar";
// import Toolbar from "@mui/materia1/Toolbar";
// import Logo from "./shared/Logo";
// import { BsDisplay } from "react-icons/bs";
// import { useAuth } from "../../context/AuthContext";





// const Header = () => {
//     const auth =useAuth();
//     return (
//         <AppBar
//             sx={{bgcolor: "transparent", position:"static",boxShadow:"none"}}
//          >
//             <Toolbar sx = {{ display: "flex"}}>
//                 <Logo />
//                 <div>
//                     {auth?.isLoggedIn ? <>
//                     <NavigationLink  bg="#f95c41" to="/chat" text="Go to Chat " textColor="#A1A1A1"/> 
//                     <NavigationLink  bg="#f95c41" to="/" text="Logout" textColor="#A1A1A1" onClick={auth.logout} /> 
//                     </>: <></>}
//                 </div>
//             </Toolbar>
//          </AppBar>
//     );
// };


import { Link } from "react-router-dom";

type Props = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick?: () => Promise<void>;
};
const NavigationLink = (props: Props) => {
  return (
    <Link
      onClick={props.onClick}
      className="nav-link"
      to={props.to}
      style={{ background: props.bg, color: props.textColor }}
    >
      {props.text}
    </Link>
  );
};

export default NavigationLink;
