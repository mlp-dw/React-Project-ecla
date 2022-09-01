import { createSlice, current } from "@reduxjs/toolkit";
import Error from "../components/Error";

const initialState = {
  color:"",
  type:"",
  length:"",
  texture:"",
  theme:"",
  result:"",
};

export const quizzSlice = createSlice({
  name: "quizz",
  initialState,
  reducers: {
    chooseColor: (state, action) => {
      state.color = action.payload;
      console.log(current(state));
      return state;
    },
    chooseType: (state, action) => {
      state.type = action.payload;
      // console.log(current(state));
      return state;
    },
    chooseLength: (state, action) => {
      state.length = action.payload;
      // console.log(current(state));
      return state;
    },
    chooseTexture: (state, action) => {
      state.texture = action.payload;
      // console.log(current(state));
      return state;
    },
    chooseTheme: (state, action) => {
      state.theme = action.payload;
      // console.log(current(state));
      return state;
    },
    saveResult: (state, action) => {
      state.result = action.payload;
      // console.log(current(state));
      return state;
    },
  },
});

export default quizzSlice.reducer;
export const { chooseColor, chooseType, chooseLength, chooseTexture, chooseTheme, saveResult } = quizzSlice.actions;
