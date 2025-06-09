import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice.js";
import filtersReducer from "./filtersSlice.js";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
