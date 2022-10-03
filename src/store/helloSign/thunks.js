import axios from "axios";
import {
  storeSetSigningUrl,
  storeSetSignatureId,
  storeSetName,
  storeSetEmail,
  storeRemoveAll,
} from "./slice";
import { apiUrl } from "../../config/constants";

export const getRequest = (customer, company, template) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/hellosign/sigUrlReq`, {
        customer,
        company,
        template,
      });

      dispatch(storeSetSigningUrl(response.data.signingUrl));
      dispatch(storeSetSignatureId(response.data.signature_request_id));
      dispatch(storeSetName(customer.name));
      dispatch(storeSetEmail(customer.email));
    } catch (error) {
      console.log(error.message);
      return "Bad request";
    }
  };
};

export const deleteRequest = (signatureId) => {
  return async (dispatch, getState) => {
    // console.log("Thunks", name, email, template);
    try {
      const response = await axios.post(`${apiUrl}/hellosign/deleteRequest`, {
        signatureId,
      });
      console.log(response);
      // dispatch(storeRemoveAll());
    } catch (error) {
      console.log(error.message);
      return "Bad request";
    }
  };
};

export const downloadDocument = (
  signatureRequestId,
  name,
  template,
  email,
  companyId,
  customerId
) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/hellosign/download`, {
        signatureRequestId,
        name,
        template,
        email,
        companyId,
        customerId,
      });
    } catch (error) {
      console.log(error.message);
      return "Bad request";
    }
  };
};
