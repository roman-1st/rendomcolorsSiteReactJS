import chroma from "chroma-js";

const initialState = {
    colors: [
      { color: String(chroma.random()), id: 0, change: true },
      { color: String(chroma.random()), id: 1, change: true },
      { color: String(chroma.random()), id: 2, change: true },
      { color: String(chroma.random()), id: 3, change: true },
      { color: String(chroma.random()), id: 4, change: true },
    ],
}

const LOCK_COLOR = "LOCK_COLOR";

export const isLockColorReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOCK_COLOR:
        let element = action.data;
        element.change === true
          ? (element.change = false)
          : (element.change = true);
  
        state.colors.map((el) => {
          el.id === element.id
            ? (el.change = element.change)
            : (el.change = el.change);
        })
        return { ...state };
  
      default:
        return state;
    }
}

export const isLockColor = (data) => ({ type: LOCK_COLOR, data });