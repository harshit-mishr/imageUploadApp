import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={style.main}>
      <div> Image Upload App</div>
      <div className={style.link}>
        <Link to="/upload">Upload</Link>
        <Link>LogOut</Link>
      </div>
    </div>
  );
}
