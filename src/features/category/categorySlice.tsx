import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  selected: string | null;
}

const initialState: CategoryState = {
  selected: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
