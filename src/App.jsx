import { React, useState } from "react";
import "./App.css";
import ColorBlock from "./components/ColorBlock.jsx";
import { useDispatch, useSelector } from "react-redux";
import { refreshColors } from "./redux-store/RefreshReducer";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);

  function changeAllColors(e) {
    e.preventDefault();
    if (e.keyCode === 32) dispatch(refreshColors());
  }

  let block = state.refreshReducer.colors.map((elem) => (
    <ColorBlock elem={elem} color={elem.color} id={elem.id} key={elem.id} />
  ));

  return (
    <div
      className="App"
      tabIndex="0"
      onKeyDown={(e) => {
        changeAllColors(e);
      }}
    >
      {block}
    </div>
  );
}

export default App;
