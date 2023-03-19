import React, { useState } from "react";
import chroma from "chroma-js";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import "./ColorBlock.css";
import { isLockColor } from "../redux-store/LockElementReducer";

let ColorBlock = (props) => {
  let id = props.id;

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  let element = state.refreshReducer.colors[id]; //элемент массива state
  let lock = faLockOpen; //переменная иконки
  let luminance = chroma(element.color).luminance(); // определение яркости цвета элемента
  let textColor = luminance > 0.5 ? "black" : "white"; // изменение цвета текста и кнопки

  state.refreshReducer.colors[id].change === true
    ? (lock = faLockOpen)
    : (lock = faLock);

  function lockedButton(e) {
    e.preventDefault()
    dispatch(isLockColor(element))
  }

  function copyColor(e) {
    navigator.clipboard.writeText(e.target.innerText);
  }

  return (
    <div className={"col"} style={{ backgroundColor: element.color }}>
      <h2 onClick={(e) => copyColor(e)} style={{ color: textColor }}>
        {element.color}
      </h2>
      <button onClick={(e) => lockedButton(e)} style={{ color: textColor }}>
        <FontAwesomeIcon icon={lock} />
      </button>
    </div>
  );
};

export default ColorBlock;
