import { createSlice } from "@reduxjs/toolkit";
const CreateNewProjectSlice = createSlice({
  name: "create new project",
  initialState: {
    createNewProject: [],
  },
  reducers: {
    createNewProjectAction: (state, action) => {
      state.createNewProject.push(action.payload);
    },
  },
});

export const { createNewProjectAction } = CreateNewProjectSlice.actions;
export default CreateNewProjectSlice.reducer;
