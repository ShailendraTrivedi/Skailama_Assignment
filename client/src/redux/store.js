import { configureStore } from "@reduxjs/toolkit";
import createNewProjectSlice from "./slices/CreateNewProject.slice";
import ProjectSlice from "./slices/Project.slice";

const store = configureStore({
  reducer: {
    storeNewProject: createNewProjectSlice,
    storeProject: ProjectSlice,
  },
});

export default store;
