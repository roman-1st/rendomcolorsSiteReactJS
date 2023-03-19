import chroma from "chroma-js";

const initialState = {
  colors: [
    { color: String(chroma.random()), id: 0, change: true },
    { color: String(chroma.random()), id: 1, change: true },
    { color: String(chroma.random()), id: 2, change: true },
    { color: String(chroma.random()), id: 3, change: true },
    { color: String(chroma.random()), id: 4, change: true },
  ],
};

const REFRESH_COLORS = "REFRESH_COLORS";

export const refreshReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_COLORS:
      state.colors.map((elem) => {
        elem.change === true
          ? (elem.color = String(chroma.random()))
          : (elem.color = elem.color);
      })
      return { ...state };

    default:
      return state;
  }
};

export const refreshColors = (data) => ({ type: REFRESH_COLORS, data });
