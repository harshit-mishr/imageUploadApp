import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../action";
import style from "./UpLoad.module.css";
export default function UpLoad() {
  const navi = useNavigate();
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();
  function handleimage(e) {
    if (e.target.files[0]) {
      const imageObj = {
        photo: URL.createObjectURL(e.target.files[0]),
        LikeCount: 10
      };

      dispatch({ type: actions.ADDAVALUE, payload: imageObj });
    }
  }
  console.log(counter, "from upload");

  return (
    <div className={style.main}>
      <div className={style.wrapper}>
        <div
          onClick={() => {
            navi("/home");
          }}
        >
          <h1>Home</h1>
        </div>
        <input onChange={handleimage} type="file" name="myImage" />
      </div>
    </div>
  );
}
