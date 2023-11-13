import { configureStore ,getDefaultMiddleware} from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

const store = configureStore({
    reducer: rootReducer,
    middleware: [
      ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    ],
    devTools: process.env.NODE_ENV !== "production",
  });

  export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;