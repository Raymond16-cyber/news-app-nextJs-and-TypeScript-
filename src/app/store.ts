import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "@/features/category/categorySlice";
import bookmarkReducer from "@/features/bookmark/bookmarkSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    bookmark: bookmarkReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
