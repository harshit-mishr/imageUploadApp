import React from "react";
import NavBar from "../Navbar/Navbar";
import { actions } from "../../action";
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import style from "./Home.module.css"
export default function Home() {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(counter, "data");

  function handleClik(x) {
    x.LikeCount = x.LikeCount + 1;
    dispatch({ type: actions.DLTVALUE, payload: x.LikeCount });
  }
  return (
    <>
    <NavBar className={style.nav}/>
    <div className={style.main}>
      <div className={style.wrapper}>
      {counter.map((x, index) => (
        <div key={index} className={style.post}>
          <img height="100px" src={x.photo} alt="photoDetails" />
          <p onClick={() => handleClik(x)}>
            <FcLike /> {x.LikeCount}
          </p>
        </div>
      ))}
      </div>
    </div>
    </>
  );
}
