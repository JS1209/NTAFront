import { useEffect } from "react";
import { getRequest, downloadDocument } from "../../store/helloSign/thunks";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectOneCustomer,
  selectOneCompany,
} from "../../store/database/selectors";
import styled from "styled-components";
import {
  selectSignatureId,
  selectSigningUrl,
  selectTemplate,
} from "../../store/helloSign/selectors";
import { clientId } from "../../config/secrets";

export const FormToDocPage_four = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const customer = useSelector(selectOneCustomer);
  const company = useSelector(selectOneCompany);
  const signingUrl = useSelector(selectSigningUrl);
  const signatureId = useSelector(selectSignatureId);
  const template = useSelector(selectTemplate);

  useEffect(() => {
    dispatch(getRequest(customer, company, template));
  }, [dispatch]);

  const getPage = () => {
    import("hellosign-embedded")
      .then(({ default: HelloSign }) => {
        return new HelloSign({
          allowCancel: true,
          clientId: clientId,
          skipDomainVerification: true,
        });
      })
      .then((client) => {
        client.open(signingUrl);
        client.on("close", (data) => {
          dispatch(
            downloadDocument(
              signatureId,
              customer.name,
              template,
              customer.email,
              company.id,
              customer.id
            )
          );
          navigate("/form/finish/succeeded");
        });
        client.on("cancel", (data) => {
          navigate("/form/finish/failed");
        });
      });
  };

  return (
    <Main>
      <Fields>
        <Title>Loading document...</Title>
        {signatureId && signingUrl ? getPage() : null}
        {/* <iframe src={signingUrl} scrolling="no" /> */}
      </Fields>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
  background-color: black;
  padding: 10px;
  height: 100%;
`;

const Title = styled.div`
  text-align: center;
  background-color: red;
  display: flex;
  align-self: center;
  maring: auto;
  font-family: "Times New Roman";
  font-size: 30px;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: middle;
  justify-content: center;
  width: 750px;
  height: 100%;
  background-color: green;
`;

const Input = styled.input`
  align-self: center;
  order: 2;
  display: flex;
  width: 55%;
  padding: 5px;
  background-color: blue;
`;

const TextDiv = styled.div`
  order: 1;
  display: flex;
  padding: 10px;
  text-align: left;
`;

const InputDiv = styled.div`
  align-self: center;
  justify-content: space-between;
  display: flex;
  flex-direction: col;
  margin: 10px;
  width: 600px;
  background-color: yellow;
`;

const Format = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  align-self: center;
  display: flex;
  widht: 20%;
  padding: 10px;
  margin: 10px;
`;
