import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
    items: [],
    loading: false,
    error: null
};

const slice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.items = payload;
            })
            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.items.push(payload);
            })
            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                state.items = state.items.filter(item => item.id !== payload.id);
            })

            .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), state => {
                state.loading = true;
            })
            .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected),
                (state, { payload }) => {
                    state.loading = false;
                    state.error = payload;
            })
            .addMatcher(isAnyOf(fetchContacts.fulfilled, addContact.fulfilled, deleteContact.fulfilled), state => {
                state.loading = false;
                state.error = null;
            });
    },
});

export const contactsReducer = slice.reducer;