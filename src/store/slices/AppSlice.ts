import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOnboardingStep: 1,
  currentSurveyStep: 1,
};

const appSlice = createSlice({
	name: "app",
  initialState,
  reducers: {
    setCurrentOnboardingStep: (state, action) => {
      state.currentOnboardingStep = action.payload;
    },
    setCurrentSurveyStep: (state, action) => {
      state.currentSurveyStep = action.payload;
    }
  }
});

export const {setCurrentOnboardingStep, setCurrentSurveyStep} = appSlice.actions;

export default appSlice.reducer;