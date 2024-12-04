import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: ''
};

const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        }
    }
});

// selectors
export const selectNameFilter = state => state.filters.name;

// actions
export const { changeFilter } = slice.actions;

export const filtersReducer = slice.reducer;