import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import hellosignReducer from "./helloSign/slice";
import databaseReducer from "./database/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    hellosign: hellosignReducer,
    database: databaseReducer,
  },
});
