import axios from "axios";
import { selectToken } from "../user/selectors";
import {
  storeSetCustomers,
  storeSetOneCustomer,
  storeSetOneCompany,
  storeSetCompanies,
  storeSetDocuments,
  storeSetOneDocument,
  storeSetAllUsers,
} from "./slice";
import { appLoading, appDoneLoading } from "../appState/slice";
import { apiUrl } from "../../config/constants";

export const getAllCustomers = () => async (dispatch, getState) => {
  dispatch(appLoading());
  const token = selectToken(getState());

  if (token === null) {
    dispatch(appDoneLoading());
    return;
  }

  try {
    const customers = await axios.get(`${apiUrl}/database/customers/list`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!customers) {
      dispatch(appDoneLoading());
      return;
    }
    dispatch(storeSetCustomers(customers.data));
    dispatch(appDoneLoading());
  } catch (error) {
    dispatch(appDoneLoading());
    console.log(error);
  }
};

export const getOneCustomer = (id) => async (dispatch, getState) => {
  dispatch(appLoading());
  const token = selectToken(getState());

  if (token === null) {
    dispatch(appDoneLoading());
    return;
  }
  try {
    const customer = await axios.get(`${apiUrl}/database/customers/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!customer) {
      dispatch(appDoneLoading());
      return;
    }
    dispatch(storeSetOneCustomer(customer.data));
    dispatch(appDoneLoading());
  } catch (error) {
    dispatch(appDoneLoading());
    console.log(error.message);
  }
};

export const insertInDatabase =
  (
    name,
    dob,
    email,
    number,
    custCountry,
    passport,
    compName,
    street,
    zip,
    compCountry,
    vat,
    coc,
    owners,
    inEU
  ) =>
  async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const customer = await axios.post(`${apiUrl}/database/form/customer`, {
        name,
        dob,
        email,
        number,
        custCountry,
        passport,
      });

      if (!customer) {
        dispatch(appDoneLoading());
        console.log("FAILED TO INSERT COSTUMER");
        return;
      }
      dispatch(storeSetOneCustomer(customer.data[0]));

      const company = await axios.post(`${apiUrl}/database/form/company`, {
        compName,
        street,
        zip,
        compCountry,
        vat,
        coc,
        owners,
        inEU,
        customerId: customer.data[0].id,
      });

      if (!company) {
        dispatch(appDoneLoading());
        console.log("FAILED TO INSERT COMPANY");
        return;
      }
      dispatch(storeSetOneCompany(company.data[0]));
      dispatch(appDoneLoading());
      return;
    } catch (e) {
      dispatch(appDoneLoading());
      console.log(e.message);
    }
  };

export const getAllCompanies = () => async (dispatch, getState) => {
  dispatch(appLoading());
  const token = selectToken(getState());

  if (token === null) {
    dispatch(appDoneLoading());
    return;
  }

  try {
    const companies = await axios.get(`${apiUrl}/database/companies/list`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!companies) {
      dispatch(appDoneLoading());
      return;
    }
    dispatch(storeSetCompanies(companies.data));
    dispatch(appDoneLoading());
  } catch (error) {
    dispatch(appDoneLoading());
    console.log(error);
  }
};

export const getOneCompany = (id) => async (dispatch, getState) => {
  dispatch(appLoading());
  const token = selectToken(getState());

  if (token === null) {
    dispatch(appDoneLoading());
    return;
  }
  try {
    const companies = await axios.get(`${apiUrl}/database/companies/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!companies) {
      dispatch(appDoneLoading());
      return;
    }
    dispatch(storeSetOneCompany(companies.data));
    dispatch(appDoneLoading());
  } catch (error) {
    dispatch(appDoneLoading());
    console.log(error.message);
  }
};

export const getAllDocuments = () => async (dispatch, getState) => {
  dispatch(appLoading());
  const token = selectToken(getState());

  if (token === null) {
    dispatch(appDoneLoading());
    return;
  }

  try {
    const documents = await axios.get(`${apiUrl}/database/documents/list`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!documents) {
      dispatch(appDoneLoading());
      return;
    }
    dispatch(storeSetDocuments(documents.data));
    dispatch(appDoneLoading());
  } catch (error) {
    dispatch(appDoneLoading());
    console.log(error);
  }
};

export const getOneDocument = (id) => async (dispatch, getState) => {
  dispatch(appLoading());
  const token = selectToken(getState());

  if (token === null) {
    dispatch(appDoneLoading());
    return;
  }
  try {
    const document = await axios.get(`${apiUrl}/database/documents/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!document) {
      dispatch(appDoneLoading());
      return;
    }
    dispatch(storeSetOneDocument(document.data));
    dispatch(appDoneLoading());
  } catch (error) {
    dispatch(appDoneLoading());
    console.log(error.message);
  }
};

export const storeImages = (images) => async (dispatch, getState) => {
  dispatch(appLoading());
  try {
    const response = await axios.post(`${apiUrl}/database/images/upload`, {
      images: images,
    });
    if (!response) {
      dispatch(appDoneLoading());
      console.log("somthng went wrong with image uploading");
      return;
    }
    dispatch(appDoneLoading());
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteCompany = (id) => async (dispatch, getState) => {
  dispatch(appLoading());
  const token = selectToken(getState());

  if (token === null) {
    dispatch(appDoneLoading());
    return;
  }

  try {
    const response = await axios.delete(
      `${apiUrl}/database/delete/company/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (!response) {
      dispatch(appDoneLoading());
      console.log("Something went wrong");
      return;
    }
    console.log(response);
    dispatch(appDoneLoading());
  } catch (e) {
    dispatch(appDoneLoading());
    console.log(e.message);
  }
};

export const deleteCustomer = (id) => async (dispatch, getState) => {
  dispatch(appLoading());
  const token = selectToken(getState());

  if (token === null) {
    dispatch(appDoneLoading());
    return;
  }

  try {
    const response = await axios.delete(
      `${apiUrl}/database/delete/customer/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (!response) {
      dispatch(appDoneLoading());
      console.log("Something went wrong");
      return;
    }
    console.log(response);
    dispatch(appDoneLoading());
  } catch (e) {
    dispatch(appDoneLoading());
    console.log(e.message);
  }
};

export const getAllUsers = () => async (dispatch, getState) => {
  dispatch(appLoading());
  const token = selectToken(getState());

  if (token === null) {
    dispatch(appDoneLoading());
    return;
  }

  try {
    const users = await axios.get(`${apiUrl}/database/users/list`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!users) {
      dispatch(appDoneLoading());
      return;
    }
    dispatch(storeSetAllUsers(users.data));
    dispatch(appDoneLoading());
  } catch (error) {
    dispatch(appDoneLoading());
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  dispatch(appLoading());
  const token = selectToken(getState());

  if (token === null) {
    dispatch(appDoneLoading());
    return;
  }

  try {
    const response = await axios.delete(
      `${apiUrl}/database/delete/user/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (!response) {
      dispatch(appDoneLoading());
      console.log("Something went wrong");
      return;
    }
    console.log(response);
    dispatch(appDoneLoading());
  } catch (e) {
    dispatch(appDoneLoading());
    console.log(e.message);
  }
};
