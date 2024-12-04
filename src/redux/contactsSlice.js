import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.items.filter(item => item.id !== action.payload);
        }
    }
});

// selectors
export const selectContacts = state => state.items;

//actions
export const { addContact, deleteContact } = slice.actions;

export const contactsReducer = slice.reducer;