import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signingUrl: null,
  signatureId: null,
  template: null,
  name: null,
  email: null,
};

export const hellosignSlice = createSlice({
  name: "hellosign",
  initialState,
  reducers: {
    storeSetSigningUrl: (state, action) => {
      state.signingUrl = action.payload;
    },
    storeSetSignatureId: (state, action) => {
      state.signatureId = action.payload;
    },
    storeSetTemplate: (state, action) => {
      state.template = action.payload;
    },
    storeSetName: (state, action) => {
      state.name = action.payload;
    },
    storeSetEmail: (state, action) => {
      state.email = action.payload;
    },
    storeRemoveAll: (state) => {
      state.signingUrl = null;
      state.signatureId = null;
      state.name = null;
      state.email = null;
    },
  },
});

export const {
  storeSetSigningUrl,
  storeSetSignatureId,
  storeSetTemplate,
  storeSetEmail,
  storeSetName,
  storeRemoveAll,
} = hellosignSlice.actions;

export default hellosignSlice.reducer;
