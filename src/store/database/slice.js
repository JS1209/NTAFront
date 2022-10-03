import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: null,
  customers: null,
  company: null,
  companies: null,
  document: null,
  documents: null,
  users: null,
};

export const databaseSlice = createSlice({
  name: "database",
  initialState,
  reducers: {
    storeSetCustomers: (state, action) => {
      state.customers = action.payload;
    },
    storeSetOneCustomer: (state, action) => {
      state.customer = action.payload;
    },
    storeSetOneCompany: (state, action) => {
      state.company = action.payload;
    },
    storeSetCompanies: (state, action) => {
      state.companies = action.payload;
    },
    storeSetOneDocument: (state, action) => {
      state.document = action.payload;
    },
    storeSetDocuments: (state, action) => {
      state.documents = action.payload;
    },
    storeSetAllUsers: (state, action) => {
      state.users = action.payload;
    },
    storeRemoveAll: (state) => {
      state.customer = null;
      state.costumers = null;
      state.company = null;
      state.companies = null;
      state.document = null;
      state.documents = null;
      state.users = null;
    },
  },
});

export const {
  storeSetCustomers,
  storeSetOneCustomer,
  storeSetOneCompany,
  storeSetCompanies,
  storeSetDocuments,
  storeSetOneDocument,
  storeSetAllUsers,
  storeRemoveAll,
} = databaseSlice.actions;

export default databaseSlice.reducer;
