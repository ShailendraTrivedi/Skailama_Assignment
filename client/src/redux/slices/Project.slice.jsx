import { createSlice } from "@reduxjs/toolkit";

const ProjectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
  },
  reducers: {
    setProject: (state, action) => {
      const date = new Date();
      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
      const formattedTime = `${date.getHours()}:${date.getMinutes()}`;
      const values = {
        ...action.payload,
        data: formattedDate,
        time: formattedTime,
      };
      state.projects.push(values);
    },
    setEdit: (state, action) => {
      console.log(action.payload);
      const { index, text } = action.payload;
      state.projects[index] = {
        ...state.projects[index],
        text: text,
      };
    },
    deleteProject: (state, action) => {
      const restProjects = state.projects.filter(
        (_, i) => i !== action.payload
      );
      state.projects = restProjects;
    },
  },
});

export const { setProject, setEdit, deleteProject } = ProjectSlice.actions;
export default ProjectSlice.reducer;
